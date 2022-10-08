import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
	username:{
		type: String,
		required: [true, 'Please Provide an username'],
		minlength: 3,
		maxlength: 20,
	},
	email:{
		type: String,
		required: [true, 'Please provide an email'],
		unique: true,
		    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
	},
	password:{
		type: String,
		required: [true, 'Please provide a Password'],
		minlength: 8,
		maxlength: 150,
	},
	isAdmin:{
		type: Boolean,
		default: false,
	},
},{timestamps: true})

/*GENERATE HASH WITH SALT*/
UserSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

/*CREATE JWT*/
UserSchema.methods.createJWT= async function () {
	return jwt.sign(
	{userId:this._id,isAdmin: this.isAdmin},
		process.env.JWT_SECRET,
		{expiresIn: process.env.JWT_LIFETIME}
	)
}

/*COMPARE PASSWORDS*/
UserSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password)
	return isMatch
}

export default mongoose.model("User",UserSchema)

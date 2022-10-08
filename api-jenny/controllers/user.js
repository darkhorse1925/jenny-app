import customError from '../errors/customError.js'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'

/*GET ANY USER - ADMIN*/
const getAnyUser = async (req,res) =>{
	const user = await User.findById(req.params.id)
	const {password, ...others} = user._doc
	res.status(200).json(others)
}

/*GET ALL USERS - ADMIN*/
const getAllUsers= async (req,res) =>{
	const query = req.query.new
	const users = query ? await User.find().sort({id:-1}).limit(5) : await User.find()
	res.status(200).json(users)
}

/*UPDATE*/
const updateUser= async (req,res) =>{
	const {password} = req.body
	if(!password || password === ''){
		throw new customError('Please provide a password', 401)
	}
	const salt = await bcrypt.genSalt(10)
	req.body.password= await bcrypt.hash(password, salt)

	const updatedUser = await User.findByIdAndUpdate(req.user.userId,
		req.body,
		{new: true, runValidators: true} )
	if (!updatedUser){
		throw new customError ("Cannot find the user", 404)
	}
	res.status(200).json(updatedUser)
}

/*DELETE*/
const deleteUser = async (req,res) =>{
	await User.findOneAndDelete(req.params.id)
	res.status(200).json('User has been deleted')
}

export {updateUser, deleteUser, getAnyUser, getAllUsers} 

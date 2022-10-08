import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true,
	},
	desc:{
		type: String,
	},
	img:{
		type: String,
		required: true,
	},
	tag:{
		type: Array,
	},
	price:{
		type: Number,
		required: true,
	},
	inStock:{
		type: Boolean,
		required: true,
	},
},{timestamps: true})

export default mongoose.model("Product",ProductSchema)

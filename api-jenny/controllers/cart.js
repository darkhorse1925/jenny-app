import customError from '../errors/customError.js'
import Cart from '../models/Cart.js'

/*CREATE -TOKEN_USER*/
const createCart = async (req,res) =>{
	const newCart = new Cart(req.body)
	const saveCart = await newCart.save()
	res.status(201).json(saveCart)
}


/*UPDATE -AUTH_USER*/
const updateCart= async (req,res) =>{
	const updatedCart= await Cart.findByIdAndUpdate(req.params.id,
		req.body,
		{new: true, runValidators: true} )
	if (!updatedCart){
		throw new customError ("Cannot find the product in your cart", 404)
	}
	res.status(200).json(updatedCart)
}

/*DELETE -AUTH_USER*/
const deleteCart = async (req,res) =>{
	await Cart.findOneAndDelete(req.params.id)
	res.status(200).json('Product has been deleted from your cart')
}

/*GET USER CART */
const getCart= async (req,res) =>{
	const myCart= await Cart.findOne({_id: req.params.userId})
	res.status(200).json(myCart)
}

/*GET ALL CARTS  -ADMIN*/
const getAllCarts= async (req,res) =>{
	const carts = await Cart.find()
	res.status(200).json(carts)
}

export {createCart, updateCart, deleteCart, getCart, getAllCarts}

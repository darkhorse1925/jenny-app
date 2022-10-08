import customError from '../errors/customError.js'
import Order from '../models/Order.js'

/*CREATE -TOKEN_USER*/
const createOrder = async (req,res) =>{
	const newOrder = new Order(req.body)
	const saveOrder = await newOrder.save()
	res.status(201).json(saveOrder)
}


/*UPDATE -AUTH_USER*/
const updateOrder= async (req,res) =>{
	const updatedOrder= await Order.findByIdAndUpdate(req.params.id,
		req.body,
		{new: true, runValidators: true} )
	if (!updatedOrder){
		throw new customError ("Cannot find the product in your cart", 404)
	}
	res.status(200).json(updatedOrder)
}

/*DELETE -AUTH_USER*/
const deleteOrder = async (req,res) =>{
	await Order.findOneAndDelete(req.params.id)
	res.status(200).json('Order has been cancelled')
}

/*GET USER ORDER */
const getOrder= async (req,res) =>{
	const myOrder= await Order.find({_id: req.params.userId})
	res.status(200).json(myOrder)
}

/*GET ALL ORDERS  -ADMIN*/
const getAllOrders= async (req,res) =>{
	const orders = await Order.find()
	res.status(200).json(orders)
}

/*MONTHLY INCOME -STATS*/
const incomeStats = async (req, res) =>{
	const date = new Date()
	const lastMonth = new Date(date.setMonth(date.getMonth()) -1)
	const previousMonth= new Date(new Date.setMonth(lastMonth.getMonth()) -1)
	const income = await Order.aggregate([
		{
			$match: {createdAt: {$gte: previousMonth}}
		},
		{
			$project:{ month:{$month: "$createdAt"}, sales: "$amount" }
		},
		{
			$group: {_id:$month, total:{$sum: $sales}}
		}
	])
	res.status(200).json(income)
}
export {createOrder, updateOrder, deleteOrder, getOrder, getAllOrders, incomeStats}

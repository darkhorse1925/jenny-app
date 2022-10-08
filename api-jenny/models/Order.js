import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
	userId:{
	  type: mongoose.Types.ObjectId,
    ref: 'User',
	},
	products: [
		{
			productId: {
				type: String,
			},
			quantity: {
				type: Number,
				default: 1,
			}
		}
	],
	amount: {
		type: Number,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: "pending"
	}
},{timestamps: true})

export default mongoose.model("Order",OrderSchema)

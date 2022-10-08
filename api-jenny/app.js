import 'dotenv/config'
import cors from 'cors'
import 'express-async-errors'
import express from 'express'
const app = express()
import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import {v4 as uuid} from 'uuid'

import connectDB from './db/connectDB.js'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import productsRouter from './routes/products.js'
import cartRouter from './routes/cart.js'
import orderRouter from './routes/order.js'

import errorMiddleware from './middleware/errorMiddleware.js'
import notFound from './middleware/notFound.js'

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
	res.send("Hello from jenny-api")
})

app.use('/api/auth',authRouter)
app.use('/api/user', userRouter)
app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.use(errorMiddleware)
app.use(notFound )

const PORT = process.env.PORT || 5000

const start = async () =>{
	try {
		console.log("Trying to connect to AtlasDb...")
		await connectDB(process.env.MONGO_URI)
		app.listen(PORT,()=>{
			console.log('Server is listening at port 5000..')
		})
	} catch (error) {
		console.log(error)
	}
}

start()

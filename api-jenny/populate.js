import connectDB from './db/connectDB.js'
import Product from './models/Products.js'

import 'dotenv/config'
import populate from './populate.json' assert {type: 'json'}
import express from 'express'
const app = express()

const start = async () =>{
	try {
		console.log("Trying to connect to AtlasDb...")
		await connectDB(process.env.MONGO_URI)
		await Product.deleteMany()
		await Product.create(populate)
		console.log('Success data has been uploaded !!')
	} catch (error) {
		console.log(error)
	}
}

start ()

import customError from '../errors/customError.js'
import Product from '../models/Products.js'

/*CREATE -ADMIN*/
const createProduct = async (req,res) =>{
	const newProduct = new Product(req.body)
	const saveProduct = await newProduct.save()
	res.status(201).json(saveProduct)
}


/*UPDATE -ADMIN*/
const updateProduct= async (req,res) =>{
	const updatedProduct= await Product.findByIdAndUpdate(req.params.id,
		req.body,
		{new: true, runValidators: true} )
	if (!updatedProduct){
		throw new customError ("Cannot find the product", 404)
	}
	res.status(200).json(updatedProduct)
}

/*DELETE -ADMIN*/
const deleteProduct = async (req,res) =>{
	await Product.findOneAndDelete(req.params.id)
	res.status(200).json('Product has been deleted')
}

/*GET SINGLE PRODUCT*/
const getProduct= async (req,res) =>{
	const product= await Product.findById(req.params.id)
	res.status(200).json(product)
}

/*GET SEARCH*/
const getSearch= async (req,res) =>{
	const product= await Product.find({
		title: {$regex : req.params.search, $options : 'i'}
	})
	console.log(req.params)
	res.status(200).json(product)
}

/*GET ALL PRODUCT*/
const getAllProducts= async (req,res) =>{
	const qNew = req.query.new
	const qtag = req.query.tag
	let products

	if(qNew) {
		products = await Product.find().sort({createdAt:-1}).limit(5)
	} 

	else if (qtag) {
		products = await Product.find({
			tag: {
				$in: [qtag]
			}
		})
	}

	else {
		products = await Product.find({name: /Beta/})
	}
	res.status(200).json(products)
}

export {createProduct, updateProduct, deleteProduct, getProduct, getSearch, getAllProducts}

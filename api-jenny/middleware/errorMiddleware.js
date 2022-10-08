const errorMiddleware = (err,req,res,next) =>{

	console.log(err)
	let errorObj = {
		message : err.message || "Something went wrong ",
		statusCode : err.statusCode || 500
	}

/*Mongoose Duplicate Value Error*/
	if (err.code && err.code === 11000) {
		errorObj.message = `${Object.keys(err.keyValue)} already exist. Please provide a unique value`
		errorObj.statusCode = 400
	}
/*Mongoose Validation Error*/
	if (err.name === "ValidationError"){
		errorObj.message = Object.values(err.errors).map((item) => item.message).join(',')
		errorObj.statusCode = 400
	}

/*Mongoose Cast Error*/
	if(err.name === "CastError"){
		errorObj.message = ` Cannot find the item with id : ${err.value}`
		errorObj.statusCode = 404
	}

	return res.status(errorObj.statusCode).json({msg:errorObj.message})
	//res.status(errorObj.statusCode).json(err)
}

export default errorMiddleware

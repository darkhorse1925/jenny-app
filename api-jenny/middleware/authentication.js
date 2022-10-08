import 'dotenv/config'
import jwt from 'jsonwebtoken'
import  customError from '../errors/customError.js' 

const authentication = (req,res,next) =>{
	const authHeader = req.headers.authorization
	if(!authHeader || !authHeader.startsWith('Bearer')){
		throw new customError('Bad request no authentication token', 403)
	}

	const token = authHeader.split(' ')[1]

	try {
		const payload = jwt.verify(token,process.env.JWT_SECRET)
		req.user = {...payload}
		next()
	} catch (err) {
		throw new customError('Bad request invalid token', 403)
	}
}

export default authentication


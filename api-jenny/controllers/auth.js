import User from '../models/User.js'
import customError from '../errors/customError.js'

/*~~~~~~~~~= REGISTER =~~~~~~~~~*/
const register = async (req,res) =>{
	const user = await User.create({...req.body})
	res.status(401).json(user)
}

/*~~~~~~~~~= LOGIN =~~~~~~~~~*/
const login = async (req,res) =>{
	const {email, password: providedPassword} = req.body

	if(!email || !providedPassword) {
		throw new customError("Please provide valid credentials",400)
	}

/*Find user*/
	const user = await User.findOne({email})
	if(!user){
		throw new customError("User Not Found",401)
	}

/*Verify Password*/
	const isPasswordCorrect = await user.comparePassword(providedPassword)
	if(!isPasswordCorrect){
		throw new customError("Wrong Passowrd",401)
	}

/*JWT Token*/
	const token = await user.createJWT()

	const {password, ...others} = user._doc
	res.status(200).json({...others,token})
}

export {register, login}

import  customError from '../errors/customError.js' 

const authorization = (req,res,next) =>{
	console.log(req.params)
	console.log(req.user.userId)
	console.log(req.user.isAdmin)
	if (req.user.userId === req.params.id || req.user.isAdmin) {
		next()
	} else {
		throw new customError ('You are not authorized to view this page', 403)
	}
}

export default authorization

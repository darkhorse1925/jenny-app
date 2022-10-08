import customError from '../errors/customError.js'

const verifyAdmin = (req, res, next) =>{
		if (req.user.isAdmin === true ) {
			next ()
		}
		else {
			throw new customError("You dont have Admin rights")
		}
}

export default verifyAdmin

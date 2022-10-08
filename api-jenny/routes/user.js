import {updateUser, deleteUser, getAnyUser, getAllUsers} from '../controllers/user.js'
import stats from '../controllers/stats.js'
import authentication from '../middleware/authentication.js'
import authorization from '../middleware/authorization.js'
import verifyAdmin from '../middleware/verifyAdmin.js'

import express from 'express'
const router = express.Router()

router.route('/:id').put(authentication,authorization,updateUser).
	delete(authentication,authorization,deleteUser)

router.route('/find/:id').get(authentication, verifyAdmin ,getAnyUser)
router.route('/').get(authentication, verifyAdmin ,getAllUsers)


router.route('/stats').get(authentication, verifyAdmin, stats)

export default router

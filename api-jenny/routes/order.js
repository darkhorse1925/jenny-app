import {createOrder, updateOrder, deleteOrder, getOrder, getAllOrders, incomeStats} from '../controllers/order.js'
import authentication from '../middleware/authentication.js'
import authorization from '../middleware/authorization.js'
import verifyAdmin from '../middleware/verifyAdmin.js'

import express from 'express'
const router = express.Router()


router.route('/').post(authentication , createOrder)
router.route('/:id').put(authentication, verifyAdmin, updateOrder)
router.route('/:id').delete(authentication, authorization, deleteOrder)

router.route('/:userId').get( authentication, authorization, getOrder)
router.route('/').get( authentication, verifyAdmin, getAllOrders)
router.route('/income').get( authentication, verifyAdmin, incomeStats)

export default router

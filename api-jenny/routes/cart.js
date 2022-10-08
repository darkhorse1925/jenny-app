import {createCart, updateCart, deleteCart, getCart, getAllCarts} from '../controllers/cart.js'
import authentication from '../middleware/authentication.js'
import authorization from '../middleware/authorization.js'
import verifyAdmin from '../middleware/verifyAdmin.js'

import express from 'express'
const router = express.Router()


router.route('/').post(authentication , createCart)
router.route('/:id').put(authentication, authorization, updateCart)
router.route('/:id').delete(authentication, authorization, deleteCart)

router.route('/:userId').get( authentication, authorization, getCart)
router.route('/').get( getAllCarts)

export default router

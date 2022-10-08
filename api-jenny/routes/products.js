import {createProduct, updateProduct, deleteProduct, getProduct, getSearch, getAllProducts} from '../controllers/products.js'
import authentication from '../middleware/authentication.js'
import authorization from '../middleware/authorization.js'
import verifyAdmin from '../middleware/verifyAdmin.js'

import express from 'express'
const router = express.Router()


router.route('/').post(authentication, verifyAdmin, createProduct)
router.route('/:id').put(authentication, verifyAdmin, updateProduct)
router.route('/:id').delete(authentication, verifyAdmin, deleteProduct)

router.route('/find/:id').get( getProduct)
router.route('/search/:search').get( getSearch)
router.route('/').get( getAllProducts)
export default router

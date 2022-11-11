const express = require('express')
const router = express.Router();

const {addProduct,updateProduct,deleteProduct,getProduct,getProductById} = require('../controllers/productController');

router.post('/' , addProduct)
router.get('/' , getProduct)
router.get('/:id' , getProductById)
router.put('/:id' , updateProduct)
router.delete('/:id' , deleteProduct)

module.exports = router
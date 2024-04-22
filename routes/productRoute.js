const { getProducts, createProduct } = require('../controllers/productController')
const router = require('express').Router()

router.get('/', getProducts)
router.post('/', createProduct)

module.exports = router;
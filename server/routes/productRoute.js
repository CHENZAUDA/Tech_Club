const express = require("express");
const router = express.Router();
const product = require('../controllers/productCtrl')

router.get('/',product.getAllProducts)
router.get('/:id',product.getProductById)
router.post('/new',product.createNewProduct)
router.put('/edit/:id',product.editProduct)
router.delete('/delete/:id',product.deleteProduct)

module.exports = router
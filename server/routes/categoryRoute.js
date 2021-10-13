const express = require("express");
const router = express.Router();
const isToken = require('../controllers/authorization/isToken')
const category = require('../controllers/categoryCtrl')

router.post('/',category.newCategory)
router.get('/',category.getAllCategory)
router.get('/getById',category.getCategoryById)
router.put('/edit/:id',category.updateCategoryById)
router.delete('/:id',category.deleteCategoryById)

module.exports = router
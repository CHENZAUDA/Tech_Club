const express = require("express");
const router = express.Router();
const isToken = require('../controllers/authorization/isToken')
const category = require('../controllers/categoryCtrl')

router.post('/',isToken,category.newCategory)
router.get('/',category.getAllCategory)
router.get('/:id',isToken,category.getCategoryById)
router.put('/:id',isToken,category.updateCategoryById)
router.delete('/:id',isToken,category.deleteCategoryById)

module.exports = router
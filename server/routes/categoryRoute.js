const express = require("express");
const router = express.Router();
const isToken = require('../controllers/authorization/isToken')
const category = require('../controllers/categoryCtrl')

router.post('/',category.newCategory)
router.get('/getall',category.getAllCategory)
router.get('/:id',category.getCategoryById)
router.put('/:id',category.updateCategoryById)
router.delete('/:id',category.deleteCategoryById)

module.exports = router
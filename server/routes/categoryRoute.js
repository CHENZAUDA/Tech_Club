const express = require("express");
const router = express.Router();
const category = require('../controllers/categoryCtrl')

router.post('/',category.newCategory)
router.get('/',category.getAllCategory)
router.get('/:id',category.getCategoryById)
router.put('/edit/:id',category.updateCategoryById)
router.delete('/:id',category.deleteCategoryById)

module.exports = router
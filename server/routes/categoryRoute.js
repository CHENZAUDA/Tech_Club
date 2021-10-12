const express = require("express");
const router = express.Router();
const category = require('../controllers/categoryCtrl')

router.post('/',category.newCategory)

module.exports = router
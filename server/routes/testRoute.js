const express = require("express");
const router = express.Router();
const test = require('../controllers/testCtrl');


router.post('/', test.post);
module.exports = router;

const express = require("express");
const router = express.Router();
const user = require('../controllers/userCtrl');


router.post('/', user.newUser);


module.exports = router;

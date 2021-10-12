const express = require("express");
const router = express.Router();
const user = require('../controllers/userCtrl');


router.get('/:id', user.getUserById);
router.get('/', user.getUsers);



module.exports = router;

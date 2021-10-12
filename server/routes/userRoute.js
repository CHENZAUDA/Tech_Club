const express = require("express");
const router = express.Router();
// const ROLE = process.env.ROLE
// const {authRole} = require('../controllers/authentication/auth')
const user = require('../controllers/userCtrl');


router.post('/', user.newUser);
router.put('/',user.enterPassword)
router.get('/:id', user.getUserById);
router.get('/', user.getUsers);



module.exports = router;

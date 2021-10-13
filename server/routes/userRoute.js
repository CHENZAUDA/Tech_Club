const express = require("express");
const router = express.Router();
const ROLE = process.env.ROLE
const { authRole } = require('../controllers/authentication/auth')
const { checkPassword, changePassword } = require('../controllers/authorization/changePassword')
const isToken = require('../controllers/authorization/isToken')
const user = require('../controllers/userCtrl');


router.get('/', user.getAllUsers);
router.get('/userById/:id', user.getUserById);
router.post('/', user.newUser);
router.put('/update', user.updateUser)
router.put('/pref_update', isToken, authRole(ROLE), user.prefUpdate)
router.delete('/:id', user.deleteUser)
router.put('/changePassword', checkPassword, changePassword);



module.exports = router;

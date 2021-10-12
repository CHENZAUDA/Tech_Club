const express = require("express");
const router = express.Router();
const ADMIN = process.env.ADMIN;


const login = require('../controllers/authorization/login');
// const logout = require('../controller/authorization/logout');
// const upload = require('../middleware/upload');

router.post('/', login);
// router.post('/register',upload.single('profileImg'), register);
// router.get('/logout',logout);
module.exports = router;

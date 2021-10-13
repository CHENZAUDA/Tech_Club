const express = require("express");
const router = express.Router();

const login = require('../controllers/authorization/login');
const logout = require('../controllers/authorization/logout');
// const upload = require('../middleware/upload');

router.post('/', login);
// router.post('/register',upload.single('profileImg'), register);
router.get('/logout',logout);
module.exports = router;


/// new blog upload.single('file')
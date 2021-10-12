const express = require("express");
const router = express.Router();
const forum = require('../controllers/postCtrl');


router.post('/', forum.post);
module.exports = router;

const express = require("express");
const router = express.Router();
const blog = require('../controllers/blogCtrl');

router.get('/', blog.getAllBlogs);
router.get('/blogById/:id', blog.getBlogById);
router.post('/', blog.newBlog);
router.delete('/:id', blog.deleteBlog)

module.exports = router;

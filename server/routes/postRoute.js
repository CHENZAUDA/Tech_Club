const express = require("express");
const router = express.Router();
const forum = require("../controllers/postCtrl");
const comment = require('../controllers/commentCtrl')

//post
router.post("/", forum.post);
router.get("/getById", forum.getById);
router.get("/", forum.getAll);
router.put("/edit/:id", forum.getByIdAndUpdate);
router.delete("/:id", forum.deleteById);


///comments
router.get('/comment/getAllComments',comment.getAllComments);
router.get('/comment/getCommentById',comment.getCommentById);
router.post('/comment/newComment',comment.newComment);
router.put('/comment/getCommentAndUpdate',comment.getCommentAndUpdate);
router.delete('/comment/deleteComment',comment.deleteComment);
module.exports = router;

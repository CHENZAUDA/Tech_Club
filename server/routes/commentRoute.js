const express = require("express");
const router = express.Router();
const comment = require("../controllers/commentCtrl");

router.get("/", comment.getAllComments);
router.get("/comment_by_id", comment.getCommentById);
router.post("/", comment.newComment);
router.put("/update_comment", comment.getCommentAndUpdate);
router.delete("/:id", forum.deleteComment);
module.exports = router;

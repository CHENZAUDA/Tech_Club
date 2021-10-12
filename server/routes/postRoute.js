const express = require("express");
const router = express.Router();
const forum = require("../controllers/postCtrl");

router.post("/", forum.post);
router.get("/:id", forum.getById);
router.get("/", forum.getAll);
router.put("/:id", forum.getByIdAndUpdate);
router.delete("/:id", forum.deleteById);
module.exports = router;

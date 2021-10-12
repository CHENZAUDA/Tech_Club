const express = require("express");
const router = express.Router();
const forum = require("../controllers/postCtrl");

router.post("/", forum.post);
router.get("/getById", forum.getById);
router.get("/", forum.getAll);
router.put("/edit/:id", forum.getByIdAndUpdate);
router.delete("/:id", forum.deleteById);
module.exports = router;

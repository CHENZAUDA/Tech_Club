const PostModel = require("../models/postModel");

const post = async (req, res) => {
  try {
    await PostModel.insertMany([req.body], (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(201).json({
        success: true,
        message: "create new post",
        data: result,
      });
    });
    
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "create post failed",
      error: err.message,
    });
  }
};

const getAll = async (req, res) => {
  // try {
    const posts = await PostModel.find({}, (err, result) => {
      if (err) console.log(err);
       res.status(201).json({
        success: true,
        message: "get all Post success",
        data: result
      });
    });
};
const getById = async (req, res) => {
  try {
    const onePost = await PostModel.findById(req.body._id, (err, result) => {
      if (err) console.log(err);
      res.status(201).json({
        success: true,
        message: "get By Id success",
        data: result,
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "get By Id failed",
      error: err.message,
    });
  }
};

const getByIdAndUpdate = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.body.id,
      { $set: req.body },
      (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.status(201).json({
          success: true,
          message: "update success",
          data: result,
        });
      }
    );
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "update failed",
      error: err.message,
    });
  }
};
const deleteById = async (req, res) => {
  try {
    await PostModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.status(201).json({
        success: true,
        message: "delete By Id success",
        data: result,
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "delete By Id failed",
      error: err.message,
    });
  }
};

module.exports = { post, getById, deleteById, getAll, getByIdAndUpdate };

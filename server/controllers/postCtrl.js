const PostModel = require("../models/postModel");
const UserModel = require("../models/userModel");

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
    // const user = await UserModel.findById(req.body.id)
    // const { forumName, subName, title, message, stars, likes } = req.body
    // const newPost = new PostModel({
    //     forumName: forumName,
    //     subName: subName,
    //     title: title,
    //     message: message,
    //     stars: stars,
    //     likes: likes,
    //     createBy:user._id
    // });
    // await newPost.save();
    // user.posts.push(newPost)
    // await user.save();
    // res
    // .status(201)
    // .json({
    //     success: true,
    //     message: "create new post",
    //     data: newPost
    // })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "create post failed",
      error: err.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    await UserModel.find({}, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.status(201).json({
        success: true,
        message: "get all Post success",
        data: result,
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "failed get all",
      error: err.message,
    });
  }
};
const getById = async (req, res) => {
  try {
    await UserModel.findById(req.params.id, (err, result) => {
      if (err) console.log(err);
      console.log(result);
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
    await UserModel.findByIdAndUpdate(
      req.params.id,
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
    await UserModel.findByIdAndDelete(req.params.id, (err, result) => {
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

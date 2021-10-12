const CategoryModel = require("../models/categoryModel");

const newCategory = async (req, res) => {
  try {
    await CategoryModel.insertMany([req.body], (err, result) => {
      console.log(req.body);
      if (err) throw err;
      res.status(201).json({
        success: true,
        message: "create new category",
        data: result,
      });
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: "failed create new category ",
      error: err.message,
    });
  }
};
const getAllCategory = async (req, res) => {
  try {
    await CategoryModel.find({}, (err, result) => {
      if (err) console.log(err);
      res.status(201).json({
        success: true,
        message: "get new category",
        data: result,
      });
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: "get new category failed",
      error: err.message,
    });
  }
};
const getCategoryById = async (req, res) => {
  try {
    await CategoryModel.findById(req.params.id, (err, result) => {
      if (err) console.log(err);
      res.status(201).json({
        success: true,
        message: "get category by id success",
        data: result,
      });
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: "get category by id failed",
      error: err.message,
    });
  }
};
const updateCategoryById = async (req, res) => {
  try {
    await CategoryModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, result) => {
        if (err) console.log(err);
        res.status(201).json({
          success: true,
          message: "update category success",
          data: result,
        });
      }
    );
  } catch (err) {
    res.status(201).json({
      success: false,
      message: "update category failed",
      error: err.message,
    });
  }
};
const deleteCategoryById = async (req, res) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) console.log(err);
      res.status(201).json({
        success: true,
        message: "deleted category success",
        data: result,
      });
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: "delete category failed",
      error: err.message,
    });
  }
};

module.exports = {
  newCategory,
  getAllCategory,
  updateCategoryById,
  getCategoryById,
  deleteCategoryById,
};

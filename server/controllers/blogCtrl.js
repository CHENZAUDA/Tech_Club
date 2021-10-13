const BlogModel = require('../models/blogModel')
const { nullError, isEmptyId, nullVariable } = require("../utils/Errors");


const newBlog = async (req, res) => {
    const {img,title,subSubject} = req.body;
    const blog = await BlogModel.create({img:img,title:title,subSubject:subSubject}, async (err, result) => {
        try {
            res
                .status(201)
                .json({
                    success: true,
                    message: "add new blog",
                    data: result
                })
        }
        catch (err) {
            res
                .status(400)
                .json({
                    success: false,
                    message: "failed create blog",
                    error: err.message
                })
        }
    })
}
const getAllBlogs = async (req, res) => {
    try {
        await BlogModel.find({}, (err, result) => {
            if (err) throw err;
            nullError(result, res);
        });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "get all blogs field",
                error: err.message
            });
    }

}
const getBlogById = async (req, res) => {
    try {
        isEmptyId(req.params.id)
        const blog = await BlogModel.findById(req.params.id, (err, result) => {
            if (err) throw err;
            res.json({message:"success",blog:result})
        });
    } catch (err) {
        res
            .status(400)
            .json({
                success: false,
                message: "get user by id field",
                error: err.message
            });
    }
}
const deleteBlog = async (req, res) => {
    try {
        isEmptyId(req.params.id)
        await BlogModel.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) throw err;
            nullError(result, res);

        });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "deleted blog field",
                error: err.message
            });
    }
}
module.exports = {
    newBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog
}




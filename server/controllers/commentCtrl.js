const CommentModel = require("../models/commentModel");
const PostModel = require('../models/postModel')
const { nullError, isEmptyId } = require("../utils/Errors");

const getStudentsByCourse = async (req, res) => {
    try {
        isEmptyId(req.body.id);
        await PostModel.findById(req.body.id)
            .populate('comments')
            .then(post => {
                comments = post.comments.map((comment) => comment)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: 'The comment is ',
                        data: comments
                    })
            })
            .catch(err => {
                res
                    .status(400)
                    .json({
                        success: false,
                        message: 'error with population',
                        error: err.message
                    });
            })
    }
    catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "wrong",
                error: err.message
            })
    }
};

const newComment = async (req, res) => {
    getStudentsByCourse(req, res)
    try {
        await CommentModel.findByIdAndUpdate(req.body.id,
            { $set: req.body },
            { new: true },
            (err, result) => {
                if (err) throw err;
                nullError(result, res);
            }
        );
    }
    catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "new comment failed",
                error: err.message
            })
    }

};

const getAllComments = async (req, res) => {
    try {
        await CommentModel.find({}, (err, result) => {
            if (err) console.log(err);
            console.log(result);
            res.status(201).json({
                success: true,
                message: "get all comment success",
                data: result,
            });
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "failed get all comments",
            error: err.message,
        });
    }
};

const getCommentById = async (req, res) => {
    try {
        isEmptyId(req.body.id);
        await PostModel.findById(req.body.id)
            .populate('comments')
            .then(post => {
                comments = post.comments.map((comment) => comment)
                res
                    .status(200)
                    .json({
                        success: true,
                        message: 'The student is ',
                        data: comments
                    })
            })
            .catch(err => {
                res
                    .status(400)
                    .json({
                        success: false,
                        message: 'error with population',
                        error: err.message
                    });
            })

    }
    catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "wrong",
                error: err.message
            })
    }
};

const getCommentAndUpdate = async (req, res) => {
    try {
        await CommentModel.findByIdAndUpdate(
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

const deleteComment = async (req, res) => {
    try {
        isEmptyId(req.params.id)
        await CommentModel.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) throw err;
            nullError(result, res);
        })
    }
    catch (err) {
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
    newComment,
    getAllComments,
    getCommentById,
    getCommentAndUpdate,
    deleteComment
};





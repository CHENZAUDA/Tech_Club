const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        forumName: {
            type: String,
            required: true
        },
        subject: {
            type: [
                {
                    subName: {
                        type: String,
                        required: true
                    },
                    info: [
                        {
                            title: {
                                type: String,
                                required: true
                            },
                            message: {
                                type: String,
                                required: true,
                            },
                            stars: {
                                type: Number,
                                required: false,
                                default: 0
                            },
                            likes: {
                                type: Number,
                                required: false,
                                default: 0
                            },
                           
                            expireAt: {
                                type: Date,
                                required: true,
                                default: Date.now,
                                index: { expires: "180d" },
                            },

                        }
                    ]
                }
            ]
        },
        comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
        createBy: { type: Schema.Types.ObjectId, ref: "users" },
        category:{type: Schema.Types.ObjectId, ref: "categories" }
    },
    { timestamps: true }
)

const Post = mongoose.model('posts', postSchema);

module.exports = Post;
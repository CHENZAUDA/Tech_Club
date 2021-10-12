const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
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
                            stars:{
                                 type:Number,
                                 required:false,
                                 default:0
                            },
                            likes:{
                                type:Number,
                                required:false,
                                default:0
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
        message: { type: Schema.Types.ObjectId, ref: "posts" },
        createBy: { type: Schema.Types.ObjectId, ref: "users" },
    },
    { timestamps: true }
)

const Post = mongoose.model('comments', commentSchema);

module.exports = Post;
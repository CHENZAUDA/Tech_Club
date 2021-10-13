const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        img: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        subSubject: {
            type: [
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    blogInfo: {
                        type: String,
                        required: true,
                    }
                }
            ]
        },
        upload:{
            tpe:String,
            // required:true
        }

    },
    { timestamps: true }
);
const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;

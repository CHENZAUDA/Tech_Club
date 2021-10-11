const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    createdAt : Date,
    threadId: mongoose.ObjectId,
    content : String,
    userId: mongoose.ObjectId,
    category: String
})

const Post = mongoose.model('post',postSchema);

module.exports = Post;
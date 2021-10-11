const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    title: String,
    createdAt : Date,
    categoryId: mongoose.ObjectId
})

const Forum = mongoose.model('forum',forumSchema);

module.exports = Forum;
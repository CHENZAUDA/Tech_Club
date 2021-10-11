const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    title: String,
    createdAt : Date,
    forumId: mongoose.ObjectId,
    content : String,
    userId: mongoose.ObjectId
})

const Thread = mongoose.model('thread',ThreadSchema);

module.exports = Thread;
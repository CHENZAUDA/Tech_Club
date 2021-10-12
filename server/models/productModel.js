const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title : String, 
    threadId: mongoose.ObjectId,
    content : String,
    userId: mongoose.ObjectId,
    category: String
})

const Product = mongoose.model('product',productSchema);

module.exports = Product;
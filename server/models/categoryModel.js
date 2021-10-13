const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
        cards: {
            type: [
                {
                    cardName: {
                        type: String,
                        required: true,
                        default:''
                    },
                    info: {
                        type: String,
                        required: true,
                        default:''

                    }
                }
            ],
            required: true
        }      
    })

const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;
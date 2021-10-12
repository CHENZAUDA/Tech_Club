const env = require('dotenv').config()
const dbConnection = process.env.DB_CONNECTION

const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose
    .connect(dbConnection, options)
    .then(() => {
        console.log("mongoDB connected");
    })
    .catch((err) => {
        console.log("Connection error", err.message);
    });
const db  = mongoose.connection;
module.exports = db;
 

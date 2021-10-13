const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import route
const forum = require("./routes/postRoute");
const user = require("./routes/userRoute");
const category = require("./routes/categoryRoute");
const product = require("./routes/productRoute");
const login = require("./routes/loginRoute");

const isToken = require("./controllers/authorization/isToken");

//DB connection
const db = require("./DB");
db.on("error", () => {
  console.log("Connection error");
});

//app route
app.use('/api/post',isToken,forum)
app.use('/api/user',user)
app.use('/api/login',login)
app.use('/api/category',category)
app.use('/api/product',product)
//Blog Route

const server = app.listen(PORT, () => {
  console.log("live and up on port " + PORT);
});

module.exports = server;

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB connection
const db = require("./DB");
db.on("error", () => {
  console.log('Connection error');
});


// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
//   app.get('*', (req, res)=>{
//       res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }


const server = app.listen(PORT, () => {
  console.log('live and up on port '+PORT
  );
});

module.exports = server;

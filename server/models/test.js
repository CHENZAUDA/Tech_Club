const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
    
  },
  { timestamps: true }
);
const Student = mongoose.model("test", studentSchema);
module.exports = Student;

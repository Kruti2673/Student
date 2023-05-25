const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
  },
  email: String,
  DOB: {
    type: Date,
    default: Date.now,
  },
  active: Boolean,
  education: {
    universityName: String,
    semester: String,
    cgpi: Number,
    graduationYear: Number,
  },
  address: {
    city: String,
    State: String,
  },
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;

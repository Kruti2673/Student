const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");

const studentRouter = require("./routes/student.routes");

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(studentRouter);

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  app.listen(port, () => {
    console.log("operation performed successfully");
  });
});

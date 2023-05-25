const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const studentRouter = require("./routes/student.routes");

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  app.listen(port, () => {
    console.log("operation performed successfully");
  });
});

const studentController = require("./controllers/student.controller");

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(studentRouter);

/*extra{

  // app.get("/", function (req, res) {
//   res.send("<html><body><h1>Hello World !!</h1></body></html>");
// });

// app.get("/students", function (req, res) {
//   res.json(students);
// });


//post method
//insert a new record
// app.post("/students", (req, res) => {
//   // console.log(req.body);
//   // res.send("Students POST Request");

//   const user = {
//     id: students.length + 1,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//   };
//   students.push(user);
//   res.json(user);
// });

//put method
// app.put("/students/:id", (req, res) => {
//   // const id = req.params.id;
//   // console.log(id);
//   // res.json(id);

//   let id = req.params.id;
//   let first_name = req.body.first_name;
//   let last_name = req.body.last_name;
//   let email = req.body.email;

//   let index = students.findIndex((student) => {
//     return student.id == Number.parseInt(id);
//   });

//   console.log(id, req.body, index);

//   if (index >= 0) {
//     let std = students[index];
//     std.first_name = first_name;
//     std.last_name = last_name;
//     std.email = email;
//     res.json(std);
//   } else {
//     res.status(404);
//     res.end();
//   }
// });

//delete method
// app.delete("/students/:id", (req, res) => {
//   let id = req.params.id;
//   let index = students.findIndex((student) => {
//     return student.id == Number.parseInt(id);
//   });

//   if (index >= 0) {
//     let std = students[index];
//     students.splice(index, 1);
//     res.json(std);
//   } else {
//     res.status(404);
//   }
// });
}*/

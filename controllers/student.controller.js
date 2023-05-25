const Student = require("../model/Student");
const Students = require("../students");
const mongodb = require("mongodb");

module.exports.getStudents = async (req, res) => {
  const data = await Student.find({});
  console.log("data:", data);
  return res.json(Students);
};

module.exports.postStudents = async (req, res) => {
  const data = new Student({
    id: Students.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  });

  const savedStudent = await data.save();
  console.log("savedStudent:", savedStudent);

  return res.send({ status: true, data });
};

module.exports.putStudents = async (req, res) => {
  const data = await Student.findOneAndUpdate(
    { id: req.params.id },
    {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      },
    }
  );
  res.send(data);
};

module.exports.deleteStudents = async (req, res) => {
  const data = await Student.findOneAndDelete({ id: req.params.id });
  if (!req.params.id) {
    return res.status(400).send();
  }
  res.send(data);
};

/*extra({

// module.exports.getStudents = async (req, res) => {
//   const data = await Student.find({});
//   console.log("data:", data);
//   return res.send({ status: true, data });
// };

// module.exports.postStudents = async (req, res) => {
//   const data = await Student.insertMany({});
//   console.log("data:", data);
//   return res.send({ status: true, data });
// };

// module.exports.putStudents = async (req, res) => {
//   const data = await Student.updateOne(
//     { first_name: "Terry" },
//     { first_name: "Tarun" }
//   );
//   console.log("data:", data);
//   return res.send({ status: true, data });
// };

// module.exports.deleteStudents = async (req, res) => {
//   const data = await Student.findOneAndDelete({ last_name: "Tayler" });
//   console.log("data:", data);
//   return res.send({ status: true, data });
// };

//router.post("/students", (req, res) => {
// console.log(req.body);
// res.send("Students POST Request");
//   const user = {
//     id: students.length + 1,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//   };
//   students.push(user);
//   res.json(user);
//});

// router.put("/students/:id", (req, res) => {
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

// router.delete("/students/:id", (req, res) => {
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
})*/

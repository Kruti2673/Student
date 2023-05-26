const Student = require("../model/Student");

module.exports.getStudents = async (req, res) => {
  const data = await Student.find({});
  console.log("data:", data);
  return res.send({ data });
};

module.exports.postStudents = async (req, res, next) => {
  const data = new Student({
    ...req.body,
  });

  const savedStudent = await data.save();
  console.log("savedStudent:", savedStudent);

  return res.send({ status: true, data });
};

module.exports.putStudents = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Student.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    console.log("updateStudent:", data);

    return res.status(200).send({ status: true, data });
  } catch (e) {
    return res.status(500).send({ status: false, e });
  }
};

module.exports.deleteStudents = async (req, res) => {
  console.log(req.params.id);
  const data = await Student.findOneAndDelete({ _id: req.params.id });
  if (!req.params.id) {
    return res.status(400).send();
  }
  const deleteStudent = await data.save();
  console.log("deleteStudent:", deleteStudent);

  res.send(data);
};

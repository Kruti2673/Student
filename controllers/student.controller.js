const Student = require("../model/Student");

module.exports.getStudents = async (req, res) => {
  try {
    const data = await Student.find({});
    console.log("data:", data);
    return res.status(200).send({ status: true, data });
  } catch (e) {
    return res.status(500).send({ status: false, e });
  }
};

module.exports.postStudents = async (req, res, next) => {
  try {
    const data = new Student({
      ...req.body,
    });
    console.log("\nsavedStudent:", data);

    return res.status(200).send({ status: true, data });
  } catch (e) {
    return res.status(500).send({ status: false, e });
  }
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
    console.log("\nupdateStudent:", data);

    return res.status(200).send({ status: true, data });
  } catch (e) {
    return res.status(500).send({ status: false, e });
  }
};

module.exports.deleteStudents = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Student.findOneAndDelete({ _id: req.params.id });
    if (!req.params.id) {
      return res.status(400).send();
    }

    console.log("\ndeleteStudent:", data);

    return res.status(200).send({ status: true, data });
  } catch (e) {
    return res.status(500).send({ status: false, e });
  }
};

const { Router } = require("express");
const { getStudents } = require("../controllers/student.controller");
const { postStudents } = require("../controllers/student.controller");
const { putStudents } = require("../controllers/student.controller");
const { deleteStudents } = require("../controllers/student.controller");
const router = Router();

router.get("/", function (req, res) {
  res.send("<html><body><h1>Hello World !!</h1></body></html>");
});

router.get("/students", getStudents);
router.post("/students", postStudents);
router.put("/students/:id", putStudents);
router.delete("/students/:id", deleteStudents);

module.exports = router;

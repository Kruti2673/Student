const validation = async (req, res, next) => {
  const errors = [];

  // firstName validation
  if (req.body.name.firstName.length < 3) {
    errors.push("firstName length is less than 3");
  }

  // lastName validation
  if (req.body.name.lastName.length < 3) {
    errors.push("lastName length is less than 3");
  }

  // email validation
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(req.body.email)) {
    errors.push("Invalid email syntax");
  }

  // active/boolean validation
  if (typeof req.body.active !== "boolean") {
    errors.push("Invalid type of active field");
  }

  // education validation
  if (
    typeof req.body.education.universityName !== "string" ||
    typeof req.body.education.semester !== "number" ||
    typeof req.body.education.cgpi !== "number" ||
    typeof req.body.education.graduationYear !== "number"
  ) {
    errors.push("Something went wrong in the education field");
  }

  //address validation
  if (!req.body.address.city) {
    errors.push("City is required");
  }
  if (!req.body.address.State) {
    errors.push("State is required");
  }

  if (errors.length === 0) {
    next();
  } else {
    return res.status(500).send({
      status: false,
      errors: errors,
    });
  }
};

module.exports = { validation };

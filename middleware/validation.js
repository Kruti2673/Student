const validation = async (req, res, next) => {
  if (req.body.name.firstName.length >= 3) {
    next();
  } else {
    return res
      .status(500)
      .send({ status: false, error: "firstName length is less than 3" });
  }
  if (req.body.name.lastName.length >= 3) {
    next();
  } else {
    return res
      .status(500)
      .send({ status: false, error: "lastName length is less than 3" });
  }
  if (typeof active === "boolean") {
    next();
  } else {
    return res
      .status(500)
      .send({ status: false, error: "Invalid type of activeField" });
  }
};

module.exports = { validation };

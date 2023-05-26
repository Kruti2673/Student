const validation = async (req, res, next) => {
  if (req.body.name.firstName.length >= 3) {
    next();
  } else {
    return res
      .status(500)
      .send({ status: false, error: "length is less than 3" });
  }
};

module.exports = { validation };

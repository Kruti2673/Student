const Joi = require("joi");

const validation = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.object({
      firstName: Joi.string().min(3).max(40).required(),
      lastName: Joi.string().min(3).max(40).required(),
    }),

    email: Joi.string().email().required(),

    active: Joi.boolean().required(),

    education: Joi.object({
      universityName: Joi.string().required(),
      semester: Joi.number().required(),
      cgpi: Joi.number().required(),
      graduationYear: Joi.number().required(),
    }),

    address: Joi.object({
      city: Joi.string().required(),
      State: Joi.string().required(),
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    console.log("\n");
    console.log("Validation errors:");
    error.details.forEach((error) => {
      console.log(error.message);
    });
    return res.status(500).send({
      status: false,
      errors: error.details.map((error) => error.message),
    });
  }
};

module.exports = { validation };

/*
const validation = async (req, res, next) => {
  const errorMessages = {};

  // firstName validation
  if (req.body.name.firstName.length < 3) {
    errorMessages.firstName = "firstName length is less than 3";
  }

  // lastName validation
  if (req.body.name.lastName.length < 3) {
    errorMessages.lastName = "lastName length is less than 3";
  }

  // email validation
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(req.body.email)) {
    errorMessages.email = "Invalid email syntax";
  }

  // active/boolean validation
  if (typeof req.body.active !== "boolean") {
    errorMessages.active = "Invalid type of active field";
  }

  // education validation
  if (
    typeof req.body.education.universityName !== "string" ||
    typeof req.body.education.semester !== "number" ||
    typeof req.body.education.cgpi !== "number" ||
    typeof req.body.education.graduationYear !== "number"
  ) {
    errorMessages.education = "Something went wrong in the education field";
  }

  // address validation
  if (!req.body.address.city) {
    errorMessages.city = "City is required";
  }
  if (!req.body.address.State) {
    errorMessages.state = "State is required";
  }

  if (Object.keys(errorMessages).length === 0) {
    next();
  } else {
    console.log("\n");
    console.log("Validation errors:");
    Object.keys(errorMessages).forEach((key) => {
      console.log(`${key}: ${errorMessages[key]}`);
    });
    return res.status(500).send({
      status: false,
      errors: errorMessages,
    });
  }
};

module.exports = { validation };
*/

/*
// const validation = async (req, res, next) => {
//   const errors = [];

//   // firstName validation
//   if (req.body.name.firstName.length < 3) {
//     errors.push("firstName length is less than 3");
//   }

//   // lastName validation
//   if (req.body.name.lastName.length < 3) {
//     errors.push("lastName length is less than 3");
//   }

//   // email validation
//   if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(req.body.email)) {
//     errors.push("Invalid email syntax");
//   }

//   // active/boolean validation
//   if (typeof req.body.active !== "boolean") {
//     errors.push("Invalid type of active field");
//   }

//   // education validation
//   if (
//     typeof req.body.education.universityName !== "string" ||
//     typeof req.body.education.semester !== "number" ||
//     typeof req.body.education.cgpi !== "number" ||
//     typeof req.body.education.graduationYear !== "number"
//   ) {
//     errors.push("Something went wrong in the education field");
//   }

//   //address validation
//   if (!req.body.address.city) {
//     errors.push("City is required");
//   }
//   if (!req.body.address.State) {
//     errors.push("State is required");
//   }

//   if (errors.length === 0) {
//     next();
//   } else {
//     return res.status(500).send({
//       status: false,
//       errors: errors,
//     });
//   }
// };

// module.exports = { validation };
*/

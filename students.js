const Student = require("./model/Student");

const Students = [
  {
    name: {
      firstName: "Kruti",
      lastName: "patel",
    },
    email: "patelkruti@gmail.com",
    active: true,
    education: {
      universityName: "abc",
      semester: "4",
      cgpi: "9.14",
      graduationYear: "2025",
    },
    address: {
      city: "rajkot",
      State: "gujarat",
    },
  },
  {
    name: {
      firstName: "abc",
      lastName: "patel",
    },
    email: "abcpatel@gmail.com",
    active: false,
    education: {
      universityName: "xyz",
      semester: "2",
      cgpi: "8.34",
      graduationYear: "2020",
    },
    address: {
      city: "morbi",
      State: "gujarat",
    },
  },
  // {
  //   id: 3,
  //   first_name: "Terry",
  //   last_name: "Vellden",
  //   email: "tvellden2@weibo.com",
  // },
  // {
  //   id: 4,
  //   first_name: "Norby",
  //   last_name: "Richardt",
  //   email: "nrichardt3@gravatar.com",
  // },
  // {
  //   id: 5,
  //   first_name: "Jillayne",
  //   last_name: "Tayler",
  //   email: "jtayler4@senate.gov",
  // },
  // {
  //   id: 6,
  //   first_name: "Orland",
  //   last_name: "Temlett",
  //   email: "otemlett5@tumblr.com",
  // },
  // {
  //   id: 7,
  //   first_name: "Jess",
  //   last_name: "Manning",
  //   email: "jmanning6@nsw.gov.au",
  // },
  // {
  //   id: 8,
  //   first_name: "Ardelis",
  //   last_name: "Schach",
  //   email: "aschach7@livejournal.com",
  // },
  // {
  //   id: 9,
  //   first_name: "Rhody",
  //   last_name: "Lettuce",
  //   email: "rlettuce8@thetimes.co.uk",
  // },
  // {
  //   id: 10,
  //   first_name: "Ruthi",
  //   last_name: "LaBastida",
  //   email: "rlabastida9@bloomberg.com",
  // },
];
module.exports = Students;

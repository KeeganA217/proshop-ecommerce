import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Keegan User",
    email: "keegan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sammy User",
    email: "sammy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

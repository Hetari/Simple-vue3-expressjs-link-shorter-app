const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const db = require("../data/db");

module.exports.signup_get = (req, res) => {};

module.exports.signup_post = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase().trim();
  password = password.trim();
  if (!isEmail(email)) {
    return res.status(400).send({
      msg: "Invalid email address",
    });
  }
  const password_hash = await bcrypt.hash(password, 10);

  const user = await db.CreateUser(email, password_hash);
  if (!user || user.status === 400) {
    return res.status(400).send({
      msg: user && user.msg ? user.msg : "Failed to create user",
    });
  } else {
    return res.status(201).send({
      msg: "User created successfully",
      user: user,
    });
  }
};

module.exports.login_get = (req, res) => {};

module.exports.login_post = async (req, res) => {};

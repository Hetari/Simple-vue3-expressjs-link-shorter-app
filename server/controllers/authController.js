const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const db = require("../data/db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports.signup_get = (req, res) => {};

module.exports.signup_post = async (req, res) => {
  let { email, password, repeated_password } = req.body;
  email = email.toLowerCase().trim();
  password = password.trim();
  if (!isEmail(email)) {
    return res.status(400).send(new Error("Invalid email address"));
  }
  if (repeated_password !== password) {
    return res.status(400).send(new Error("Passwords do not match"));
  }

  const password_hash = await bcrypt.hash(password, 10);
  const user = await db.CreateUser(email, password_hash);
  if (!user || user.status === 400) {
    return res.status(400).send(new Error("User could not be created"));
  } else {
    const token = createToken(user);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
      domain: "127.0.0.1",
      port: 8080,
    });
    return res.status(201).send({ user, token });
  }
};

module.exports.login_get = (req, res) => {};

module.exports.login_post = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase().trim();
  password = password.toString().trim();
  if (!isEmail(email)) {
    return res.status(400).send(new Error("Invalid email address"));
  }
  const user = await db.GetUserByEmail(email);

  if (!user) {
    return res.status(404).send({
      msg: "User not found",
    });
  }
  const password_hash = user.password;
  if (!bcrypt.compare(password, password_hash)) {
    return res.status(401).send(new Error("Invalid password"));
  }
  const token = createToken(user);

  res.status(200).send({
    token,
  });
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  });
};

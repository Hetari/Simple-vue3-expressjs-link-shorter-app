const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  })
  .promise();

async function GetAllUrls() {
  const [rows] = await pool.query("select * from urls");
  return rows;
}

async function GetUrl(id) {
  if (!Number.isInteger(id)) {
    throw new Error("Invalid id");
  }
  const [rows] = await pool.query("select * from urls where id = ?", [id]);
  return rows[0];
}

async function CreateUrl(long_url, short_url) {
  const [result] = await pool.query(
    "insert into urls (long_url, short_url) values (?, ?)",
    [long_url, short_url]
  );
  return GetUrl(result.insertId);
}

async function DeleteUrl(id) {
  if (!Number.isInteger(id)) {
    throw new Error("Invalid id");
  }
  const [result] = await pool.query("delete from urls where id = ?", [id]);
  return result.affectedRows > 0;
}

async function GetAllUsers() {
  const query = "SELECT * FROM users";
  const [rows] = await pool.query(query);
  return rows;
}

async function CreateUser(email, password) {
  const query = "INSERT INTO users (email, password) VALUES (?, ?)";
  const values = [email, password];
  try {
    const [result] = await pool.query(query, values);
    // return GetUserById(result.insertId);
    return result.insertId;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return new Error("Email address already exists");
    } else if (error.code === "ER_BAD_NULL_ERROR")
      return new Error("Email and password are required");
    else {
      return error;
    }
  }
}

async function GetUserById(id) {
  const query = "SELECT * FROM users WHERE id = ?";
  const values = [id];

  const [rows] = await pool.query(query, values);
  return rows[0];
}

async function GetUserByEmail(email) {
  const query = "SELECT * FROM users WHERE email = ? LIMIT 1";
  const values = [email];

  const [rows] = await pool.query(query, values);
  return rows[0];
}

async function UpdateUser(id, name, email, password) {
  const query = "UPDATE users SET email = ?, password = ? WHERE id = ?";
  const values = [email, password, id];

  const [result] = await pool.query(query, values);
  return result.affectedRows > 0;
}

async function DeleteUser(id) {
  const query = "DELETE FROM users WHERE id = ?";
  const values = [id];

  const [result] = await pool.query(query, values);
  return result.affectedRows > 0;
}

module.exports = {
  GetAllUrls,
  GetUrl,
  CreateUrl,
  DeleteUrl,
  CreateUser,
  GetAllUsers,
  GetUserById,
  GetUserByEmail,
  UpdateUser,
  DeleteUser,
};

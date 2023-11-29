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

module.exports = {
  GetAllUrls,
  GetUrl,
  CreateUrl,
  DeleteUrl,
};

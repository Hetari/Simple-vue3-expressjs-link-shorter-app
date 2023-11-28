import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  })
  .promise();

export async function GetAllUrls() {
  const [rows] = await pool.query("select * from urls");
  pool.end();
  return rows;
}

export async function GetUrl(id) {
  if (!Number.isInteger(id)) {
    throw new Error("Invalid id");
  }
  const [rows] = await pool.query("select * from urls where id = ?", [id]);
  pool.end();
  return rows[0];
}

export async function CreateUrl(long_url, short_url) {
  const [result] = await pool.query(
    "insert into urls (long_url, short_url) values (?, ?)",
    [long_url, short_url]
  );
  pool.end();
  return GetUrl(result.insertId);
}

export async function DeleteUrl(id) {
  if (!Number.isInteger(id)) {
    throw new Error("Invalid id");
  }
  const [result] = await pool.query("delete from urls where id = ?", [id]);
  pool.end();
  return result.affectedRows > 0;
}

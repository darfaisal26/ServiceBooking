// src/config/connection.ts
import mysql from "mysql2";
import config from "../config/index";

// Create the pool and export as promise interface
export const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "admin",
    database: "servicebooking",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

// Optional: Add basic connection health check
export async function checkDatabaseConnection() {
  try {
    const [result] = await pool.query("SELECT 1");
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

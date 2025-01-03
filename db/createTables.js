import { execute } from "./dbUtils.js";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/sqlliteData.db");

export const createTable = async () => {
  const createTableStm =
  `CREATE TABLE IF NOT EXISTS calendar (
  id INTEGER PRIMARY KEY,
  date DATE NOT NULL,
  activity TEXT NOT NULL)`;
  try {
    const response = await execute( db, createTableStm);
    if (response)
      return response;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    db.close();
  }
};





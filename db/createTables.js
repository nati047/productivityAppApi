import Database from "better-sqlite3";

const db = new Database("./db/sqlliteData.db");

export const createTable = () => {
  const createTableStm = `
  CREATE TABLE IF NOT EXISTS calendar (
    id INTEGER PRIMARY KEY,
    date DATE NOT NULL,
    activity TEXT NOT NULL
  )`;

  try {
    const stmt = db.prepare(createTableStm);
    stmt.run();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    db.close();
  }
};





import { execute } from "./dbUtils.js";

export const createTable = async (db) => {
  const createTableStm =
  `CREATE TABLE IF NOT EXISTS calendar (
  id INTEGER PRIMARY KEY NOT NULL,
  date DATE NOT NULL,
  activity TEXT NOT NULL
  )
  `;
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





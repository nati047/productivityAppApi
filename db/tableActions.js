import Database from "better-sqlite3";

const connectDb = () => {
  const db = new Database("./db/sqlliteData.db");
  return db;
};

export const modifyTable = (sql, params = []) => {
  const db = connectDb();
  console.log(`sql: ${sql}`);
  console.log(`params: ${params}`);
  try {
    const stmt = db.prepare(sql);
    const response = params && params.length > 0 ? stmt.run(...params) : stmt.run();
    return response;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    db.close();
  }
};

export const getAllRows = (sql, params = []) => {
  const db = connectDb();
  try {
    const stmt = db.prepare(sql);
    const result = params && params.length > 0 ? stmt.all(...params) : stmt.all();
    return result.length > 0 ? result : null;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    db.close();
  }
};

export const getRow = (sql, params = []) => {
  const db = connectDb();
  try {
    const stmt = db.prepare(sql);
    const result = params && params.length > 0 ? stmt.get(...params) : stmt.get();
    return result || null;
  } catch (err) {
    console.log(`error in getRow ` + err);
    return null;
  } finally {
    db.close();
  }
};

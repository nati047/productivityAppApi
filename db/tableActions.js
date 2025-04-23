import { execute, run, fetchAll, fetchFirst } from "./dbUtils.js";
import sqlite3 from "sqlite3";

const connectDb = () => {
  const db = new sqlite3.Database("./db/sqlliteData.db");
  return db;
}

export const modifyTable = async (sql, params = []) => {
  const db = connectDb();
  console.log(`sql: ${sql}`);
  console.log(`params: ${params}`);
  try {
    let response;
    if (params && params.length > 0) {
      response  = await run(db, sql, params)
    } else {
      response  = await execute(db, sql);
    }
    if (response)
      return response;
  } catch (err) {
    console.log(err);
    return false;
  } finally {
    db.close();
  }
};


export const getAllRows = async (sql, params) => {
  const db = connectDb();
  try {
    const result = await fetchAll(db, sql, params);
    if (result && result.length > 0) {
      return result;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    db.close();
  }
}

export const getRow = async (sql, params) => {
  const db = connectDb();
  try {
    const result = await fetchFirst(db, sql, params);
    if (typeof result === "object") {
      return result;
    } else {
      return null;
    }
  } catch (err) {
    console.log(`error in getRow ` + err);
    return null;
  } finally {
    db.close();
  }
}
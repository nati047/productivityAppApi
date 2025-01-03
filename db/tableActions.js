import { execute, run, fetchAll, fetchFirst } from "./dbUtils.js";

export const modifyTable = async (db, sql, params = []) => {
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
  }
};


export const getAllRows = async (db, sql, params) => {
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
  }
}

export const getRow = async (db, sql, params) => {
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
  }
}
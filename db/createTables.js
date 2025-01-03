const execute = async (db, sql) => {
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err)
        reject(err);
      resolve(true);
    });
  });
};

const run = async (db, sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err) => {
      if (err)
        reject(err);
      resolve(true);
    });
  });
}

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

export const insertValues = async (db, sql, params = []) => {
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
    return false;
  }
};



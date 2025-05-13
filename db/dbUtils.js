export const execute = (db, sql) => {
  try {
    db.exec(sql);
    return true;
  } catch (err) {
    throw err;
  }
};

export const run = (db, sql, params = []) => {
  try {
    const stmt = db.prepare(sql);
    stmt.run(params);
    return true;
  } catch (err) {
    throw err;
  }
};

export const fetchAll = (db, sql, params = []) => {
  try {
    const stmt = db.prepare(sql);
    return stmt.all(params);
  } catch (err) {
    throw err;
  }
};

export const fetchFirst = (db, sql, params = []) => {
  try {
    const stmt = db.prepare(sql);
    return stmt.get(params);
  } catch (err) {
    throw err;
  }
};

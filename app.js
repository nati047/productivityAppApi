import sqlite3 from "sqlite3";
import express from "express";
import { createTable } from "./db/createTables.js";
import { getAllRows, getRow, modifyTable} from "./db/tableActions.js";

const app = express();
const port = 3000;

// Setup Database
const db = new sqlite3.Database("./db/sqlliteData.db");
createTable(db);

app.get('/', (req, res) => {
  res.json({message: "Hello World"})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


import express from "express";
import cors from 'cors';
import { createTable } from "./db/createTables.js";
import { getAllRows, getRow, modifyTable} from "./db/tableActions.js";

const app = express();
const port = 3000;

// Setup Database
createTable();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: "Hello World"})
});

app.post('/create', (req, res) => {
  const calendarMark = req.body;
  // TODO : sanitize/validate req.body
  if (calendarMark) {
    const insetrSql = `INSERT INTO calendar (date, activity) VALUES(?, ?)`;
    const params = [calendarMark.date, calendarMark.activity];
    modifyTable(insetrSql, params)
    .then( dbResponse => {
      res.sendStatus(200);
    }).catch( err => {
      console.log(err);
      res.sendStatus(400);
    })
  } else {
    res.status(400).json({message : `Valid calendarMark required!`});
  }
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  // TODO : sanitize/validate req.body
  if (id && id > 0) {
    const deleteSql = `DELETE calendar where id = ?`;
    const params = [calendarMark.id];
    modifyTable(deleteSql, [id])
    .then( dbResponse => {
      if (dbResponse)
        res.sendStatus(200);
    }).catch( err => {
      res.sendStatus(400);
    })
  } else {
    res.status(400).json({errorMessage : `Valid ID required!`})
  }
});

app.get('/all', (req, res) => {
  const selectAll = 'select * from calendar';
  getAllRows(selectAll, [])
  .then( result => {
    console.log(result);
    res.json(result);
  }).catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

app.listen(port, () => {
  console.log(`Productivity APP API - Listening on port : ${port}`)
})


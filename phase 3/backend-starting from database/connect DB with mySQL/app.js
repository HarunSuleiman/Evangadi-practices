const express = require("express");
const mysql = require("mysql2");
const app = express();
//To check if it is working
app.get("/", (req, res) => res.send("up and runing"));

app.listen(3333, (err) => {
  console.log("Listening to port  http://localhost:3333");
});
// connecting mySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "myDB",
  password: "myDB",
  database: "mydb",
});

connection.connect((err) => {
  if (err) {
    console.log("database connection faild");
  } else {
    console.log("database is connected");
  }
});

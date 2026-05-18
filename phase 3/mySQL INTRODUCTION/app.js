// first install json packege by npm init and inter ...inter upto
//CORE MODULES installing
// second npm install mysql2 --save
// install express by npm i express --save
// import mysql
const mysql = require("mysql2");
// import express
const express = require("express");

// const cors=require('cors')

//instance of express
const app = express();
//  allow user to access from different local host or..address when we click like list in this example
// app.use(cors());
// middle ware to extract info frome the html body name attribute

app.use(express.urlencoded({ extended: true }));
//middle ware to extract info from the frontend that are sent through Json

app.use(express.json());
//to get if the server is running

app.get("/", (req, res) => {
  res.send("The server is running!");
});
//#1Route add-customer=> TO INSERT customer to the table

app.post("/insert-customers-info", (req, res) => {
  console.table(req.body);
  // destructuring
  const { name, address, company } = req.body;
  //writing query to insert each data
  let insertName = "INSERT INTO customers (name) VALUES (?)";
  let insertAddress =
    "INSERT INTO address (customer_id, address) VALUES (?,?) ";
  let insertCompany =
    "INSERT INTO company (customer_id, company) VALUES (?,?) ";
  connection.query(insertName, [name], (err, results, fields) => {
    if (err) console.log(`Erorr found:${err}`);
    console.table(results);
    let id = results.insertId;
    connection.query(insertAddress, [id, address], (err, results, fields) => {
      if (err) console.log(err);
    });
    connection.query(insertCompany, [id, company], (err, results, fields) => {
      if (err) console.log(err);
    });
  });
  res.send("Data inserted successfully");
});
// #2 Route:/customers=> To retrive data frome the tables/data

app.get("/customers-detail-info", (req, res) => {
  connection.query(
    "SELECT*FROM customers JOIN address JOIN company ON customers.customer_id=address.customer_id AND customers.customer_id=company.customer_id",
    (err, results, fields) => {
      console.table(fields);
      if (err) console.log("Error during selection", err);
      res.send(results);
    }
  );
});
//ANOTHER obtion for the previous
app.get("/customers", (req, res) => {
  connection.query(
    "SELECT customers.customer_id AS id,customers.name,address.address,company.company FROM customers JOIN address JOIN company ON customers.customer_id=address.customer_id AND customers.customer_id=company.customer_id",
    (err, results, fields) => {
      if (err) console.log("Error during selection", err);
      res.send(results);
    }
  );
});

//creat mysql connection
app.listen(3001, () => {
  console.log("Server is running  on http://localhost:3001");
});

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "kebede",
  password: "kebede",
  database: "kebede",
});

connection.connect((err) => {
  if (err) {
    console.log("database connection faild", err);
  } else {
    console.log("database is connected");
  }
});

//to get on browser
app.get("/creat_table", (req, res) => {
  //sqlquery to creat customers table
  let name = `CREATE TABLE IF NOT EXISTS customers(
    customer_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (customer_id)
  )`;

  let address = `CREATE TABLE IF NOT EXISTS address(
address_id INT AUTO_INCREMENT,
customer_id INT(11) NOT NULL,
address VARCHAR(255) NOT NULL,
PRIMARY KEY (address_id),
FOREIGN KEY (customer_id) REFERENCES customers (customer_id))`;
  let company = `CREATE TABLE IF NOT EXISTS company(
company_id INT AUTO_INCREMENT,
customer_id INT(11) NOT NULL,
company VARCHAR(255) NOT NULL,
PRIMARY KEY (company_id),
FOREIGN KEY (customer_id) REFERENCES customers (customer_id))`;
  connection.query(name, (err) => {
    if (err) {
      console.log(err);
    }
  });
  connection.query(address, (err) => {
    if (err) {
      console.log(err);
    }
  });
  connection.query(company, (err) => {
    if (err) {
      console.log(err);
    }
    res.send("Table created successfully");
  });
});

//Updating

app.put("/update", (req, res) => {
  const { newName, id } = req.body;
  let upDateName = `UPDATE customers SET name = (?) WHERE customer_id=(?)`;
  connection.query(upDateName, [newName, id], (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + "record(s) updated");
    res.send(result);
  });
});

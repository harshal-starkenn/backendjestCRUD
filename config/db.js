const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dockerdb",
});

db.connect((err) => {
  if (err) {
    console.log("Error in connecting to Database");
  } else {
    console.log("Connected to Database");
  }
});

module.exports = { db };

const express = require("express");
const { db } = require("../config/db.js");

const testRoute = express.Router();

testRoute.get("/get", (req, res) => {
  res.status(200).send("Successfully on Test Route");
});

testRoute.post("/add", (req, res) => {
  const { name, email, password } = req.body;

  const addQuery =
    "INSERT INTO userdata(`name`,`email`,`password`) VALUES (?,?,?)";

  const values = [name, email, password];

  db.query(addQuery, values, (err, results) => {
    if (err) {
      res.status(500).send({ Error: err });
    } else {
      res.status(200).send({ addData: results });
    }
  });
});

testRoute.put("/edit/:id", (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  const editQuery = `UPDATE userdata SET name=?, email=?, password=? WHERE id=${id}`;

  const values = [name, email, password];

  db.query(editQuery, values, (err, results) => {
    if (err) {
      res.status(500).send({ Error: err });
    } else {
      res.status(200).send({ editData: results });
    }
  });
});

testRoute.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM userdata WHERE id=?";

  db.query(deleteQuery, [id], (err, results) => {
    if (err) {
      res.status(500).send({ Error: err });
    } else {
      res.status(200).send({ deleteData: results });
    }
  });
});

module.exports = { testRoute };

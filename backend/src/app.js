// create server

const express = require("express");

const app = express();

// Middleware
app.use(express.json());

//server test
app.get("/", (req, res) => {
  res.send("hello World");
});

module.exports = app;

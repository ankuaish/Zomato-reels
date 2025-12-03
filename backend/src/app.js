// create server

const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

//server test
app.get("/", (req, res) => {
  res.send("hello World");
});

app.use("/api/auth", authRoutes);

module.exports = app;

const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/food-view")
    .then(() => {
      console.log("MongoDb Connected");
    })
    .catch((err) => {
      console.log("MongoDb connection error :", err);
    });
}

module.exports = connectDB;

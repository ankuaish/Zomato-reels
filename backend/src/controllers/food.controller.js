const foodModel = require("../models/food.model");

async function createFood(req, res) {
  res.send("food item created ");
  console.log(req.foodPartner);
  console.log(req.body);
  console.log(req.file);
}

module.exports = {
  createFood,
};

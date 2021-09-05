const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const foodSchema = new Schema({
  foodName: String,
  description: String,
  capacity: String,
  price: String,
  avatar: String
});
module.exports = mongoose.model("Food", foodSchema);

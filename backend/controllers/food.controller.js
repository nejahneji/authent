const Food = require("../models/Food");

exports.addFood = async (req, res) => {
  console.log(req.file);
  const { foodName, description, capacity, price } = req.body;

  const newFood = new Food({
    foodName,
    description,
    capacity,
    price
  });
if( req.file){
  newFood.avatar = req.file.path
}
  try {
    await newFood.save();
    res.send(newFood);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
exports.getFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.send(foods);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
exports.deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.send("food deleted succefully");
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
exports.editFood = async (req, res) => {
  try {
    editedFood = await Food.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(editedFood);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

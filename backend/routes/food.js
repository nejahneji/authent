const express = require('express');
const { addFood, getFood, deleteFood, editFood } = require('../controllers/food.controller');
const router = express.Router();



router.post('/add',addFood);
router.get('/get', getFood);
router.delete('/delete/:id', deleteFood);
router.put('/update/:id', editFood);
module.exports= router;

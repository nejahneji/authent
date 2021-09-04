const express = require('express');
const { addFood, getFood, deleteFood, editFood } = require('../controllers/food.controller');
const router = express.Router();
const upload = require('../middlewares/upload')
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination :function(req,file ,cb){
//         cb(null , './uploads/')
//     },
//     filename :function (req, file, cb ){
//         cb(null , new Date().toISOString() + file.originalname)
//     } 
// })
// const upload = multer({storage :storage})
// upload.single('foodImage')

router.post('/add',addFood);

// console.log(req.file)
router.get('/get', getFood);
router.delete('/delete/:id', deleteFood);
router.put('/update/:id', editFood);
module.exports= router;

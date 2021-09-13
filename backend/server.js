const express = require('express');
const connectDB = require('./config/connectDB');
const app = express()
const user = require('./routes/user')
const food = require('./routes/food')


app.use(express.json())
app.use('/uploads',express.static('uploads'))
connectDB()
app.use('/user',user)
app.use('/food',food)





const PORT = process.env.PORT || 5000
app.listen(PORT , (err)=> err ? console.log(err) : console.log(`server running on port ${PORT}`))
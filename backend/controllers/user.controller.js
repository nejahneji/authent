const User = require("../models/User");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')
const config = require('config')
const secret = config.get('secret')


exports.register= async(req,res)=> {
    const {fullName,email,password,phone}=req.body
    try {
        let existantUser= await User.findOne({email})
        if(existantUser) return res.send('user already exist')
        const newUser = await new User({
            fullName,
            email,
            password,
            phone
        })
        var salt =await bcrypt.genSalt(10);
        var hash =await bcrypt.hash(password, salt);
        newUser.password=hash
        await newUser.save()
        const payload ={
            id:newUser._id
        }
        const token =await jwt.sign(payload, secret)
        res.send({
            token,
            user:{
                _id:newUser._id,
                fullName:newUser.fullName,
                email :newUser.email,
                phone:newUser.phone
            }
        })
        // res.send(newUser)
    } catch (error) {
        res.status(500).json({msg:error.msg})
    }
}
exports.login = async(req,res) => {
    const {email,password}=req.body
    try {
        let existantUser= await User.findOne({email})
        if(!existantUser) return res.status(400).json({msg:"bad credentials"})
        let isMatch = await bcrypt.compare(password,existantUser.password)
        if(!isMatch) return res.status(400).json({msg:'bad credentials'})
        const payload ={
            id:existantUser._id
        }
        const token =await jwt.sign(payload, secret)
        res.send({
            token,
            user:{
                _id:existantUser._id,
                fullName:existantUser.fullName,
                email :existantUser.email,
                phone:existantUser.phone
            }
        })
    } catch (error) {
        // res.status(500).json({msg:error.msg})
    }
}
exports.getUser = async(req,res) => {
    res.send(req.user)
}
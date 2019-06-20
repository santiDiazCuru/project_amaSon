const express = require("express")
const Router = express.Router()
const User = require("../models/Users")

Router.post('/register', function(req,res){
    User.create(req.body)
    .then((newUser)=>res.json(newUser))
})
Router.post('/login', function(req,res){
    User.findOne({where: {
        username: req.body.username,
        //password: req.body.password
    }})
    .then((user)=> res.json(user))
})

module.exports = Router





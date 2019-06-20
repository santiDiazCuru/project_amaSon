const express = require("express")
const Router = express.Router()
const User = require("../models/Users")

Router.post('/register', function(req,res){
    console.log('entra al request de post para crear un nuevo usuario')
    User.create(req.body)
    .then((newUser)=>{
        console.log('Crea un nuevo usuario: '+ newUser)
        res.json(newUser)})
})

module.exports = Router





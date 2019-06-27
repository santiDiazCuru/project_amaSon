const express = require('express');
const Router = express.Router();
const Compra = require('../models/index').Compras;
const OC = require('../models/index').OC;
const Product = require('../models/index').Products;

Router.get('/:id', function(req,res){
    console.log('xD')
    OC.findAll({where: {
        userId: req.params.id
        // [Op.ne]: ,
    }})
    .then((compras)=>res.json(compras))
})

module.exports = Router;
const express = require('express');
const Router = express.Router();
const Compra = require('../models/index').Compras;
const OC = require('../models/index').OC;
const Product = require('../models/index').Products;
const Sequelize = require('sequelize')
const Op = Sequelize.Op

Router.get('/',function(req,res){
  OC.findAll({where:{
      userId: req.params.id,
      [Op.ne]: {
        estado: 'carrito'
      },
  }})
  .then((OC)=>{
      if(!OC)return [];
      if (OC) {return Compra.findAll({where: {
          OCId: OC.id
          
      },
  include: {
      model: Product,
      as: 'product',
      attributes: ['img1', 'titulo', 'precio']
  }, order:[['id', 'DESC']]
  })}})
  .then((compras)=>res.json(compras))
})

module.exports = Router;

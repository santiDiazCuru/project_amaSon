const express = require("express")
const Router = express.Router()
const Products = require("../models/Products")

var Sequelize = require('sequelize');
const Op = Sequelize.Op


// MODIFICAR WHERE POR "CONTIENE (OP LIKE %)"
Router.get(`/:search`, (req, res) => {
    
        Products.findAll({
            where:{
                titulo: {
                    [Op.like]: `%${req.params.search}%`
                  }
            }
        })
        .then(products => res.json(products))
    
    
})

// =====  EXTRACCION DE TODA LA DATA =======
// ==== Extraccion de toda la base (provisoriamente)
Router.get('/', (req, res) => {
    Products.findAll({})
    .then(products => res.json(products))
})

// =====  EXTRACCION DE TODA LA DATA POR CATEGORIA =======
Router.get('/categoria/:category', (req, res) => {
    Products.findAll({
        where:{
            categorias:req.params.category
        }
    })
    .then(products => res.json(products))
})

module.exports= Router
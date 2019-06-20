const express = require("express")
const Router = express.Router()
const Products = require("../models/Products")

// =====  EXTRACCION DE TODA LA DATA =======
// ==== Extraccion de toda la base (provisoriamente)
Router.get('/', (req, res) => {
    Products.findAll({})
    .then(products => res.json(products))
})

// MODIFICAR WHERE POR "CONTIENE (OP LIKE %)"
Router.get(`/:search`, (req, res) => {
    Products.findAll({where:{titulo: req.params.search}})
    .then(products => res.json(products))
})


module.exports= Router
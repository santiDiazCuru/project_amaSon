const express = require("express")
const Router = express.Router()
const Products = require("../models/Products")

Router.get(`/:search`, (req, res) => {
    Products.findAll({where:{titulo: req.params.search}})
    .then(products => res.json(products))
})


module.exports= Router
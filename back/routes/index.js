const express = require("express");
const Router = express.Router();
const ProductsRouter = require('./products')
const Products = require('../models/Products');

Router.use('/products', ProductsRouter)
Router.use('/api/products', ProductsRouter)

Router.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '../public', 'index.html'))
})

module.exports = Router


const express = require("express");
const Router = express.Router();
const ProductsRouter = require('./products')
const path = require('path')
const Products = require('../models/Products');

//Router.use('/products', ProductsRouter)
Router.use('/api/products', ProductsRouter)

module.exports = Router


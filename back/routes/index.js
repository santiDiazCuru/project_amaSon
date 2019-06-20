const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const usersRouter = require('./users')
const path = require('path')
const Products = require('../models/Products');

//Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)

Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)
Router.use('/users', usersRouter)

module.exports = Router


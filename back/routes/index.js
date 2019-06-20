const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const usersRouter = require('./users')
const path = require('path')

Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)
Router.use('register', usersRouter)
module.exports = Router


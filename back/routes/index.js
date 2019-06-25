const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const usersRouter = require('./users')



Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)
Router.use('/api/users', usersRouter)

module.exports = Router


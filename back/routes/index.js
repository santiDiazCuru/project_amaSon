const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const usersRouter = require('./users')
const path = require('path')
<<<<<<< HEAD
=======
const Products = require('../models/Products');

//Router.use('/products', ProductsRouter)
Router.use('/api/products', ProductsRouter)
>>>>>>> 99d33d405e669e2b389e76a75094be07251269c0

Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)
Router.use('register', usersRouter)
module.exports = Router


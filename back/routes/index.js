const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const comprasRouter = require('./compras');
const usersRouter = require('./users')


const path = require('path')


const Products = require('../models/Products');
const Reviews = require('../models/Reviews');


Router.use('/api/compras', comprasRouter)
Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)
Router.use('/api/users', usersRouter)
Router.use('/users', usersRouter)


module.exports = Router


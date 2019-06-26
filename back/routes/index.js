const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const comprasRouter = require('./compras');
const usersRouter = require('./users')

//prueba para la db:
const Products = require('../models').Products
const Category = require('../models').category
const Compras = require('../models').Compras
const OC = require('../models').OrdenesDeCompra
const User = require('../models').Users
const Review = require('../models').Reviews

Router.use('/api/compras', comprasRouter)
Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)
Router.use('/api/users', usersRouter)
Router.use('/users', usersRouter)


module.exports = Router


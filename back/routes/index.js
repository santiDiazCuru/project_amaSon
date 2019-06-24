const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const usersRouter = require('./users')
const path = require('path')

const Relations = require('../models/Relations')
const Products = require('../models/Products');
const Review = require('../models/Reviews');
const Compra = require('../models/Compras');
const OrdenDeCompra = require('../models/OrdenesDeCompra');



Router.use('/products', productsRouter)
Router.use('/api/products', productsRouter)
Router.use('/api/users', usersRouter)

module.exports = Router


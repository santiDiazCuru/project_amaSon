const express = require("express");
const Router = express.Router();
const productsRouter = require('./products')
const usersRouter = require('./users')
const path = require('path')
const reviewsRouter = require('./reviews')

const Products = require('../models/Products');
const Reviews = require('../models/Reviews');



Router.use('/api/products', productsRouter)
Router.use('/api/users', usersRouter)
Router.use('/api/reviews', reviewsRouter)


module.exports = Router;
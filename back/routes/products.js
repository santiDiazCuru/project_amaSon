const express = require("express")
const Router = express.Router()
const Products = require("../models/Products")

var Sequelize = require('sequelize');
const Op = Sequelize.Op

//BUSCA PRODUCTOS POR ID
Router.get(`/:id`, (req, res) => {
    Products.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(product => res.json(product))
})


// MODIFICAR WHERE POR "CONTIENE (OP LIKE %)"
Router.get(`/search`, (req, res) => {
    let pageSize = 8;
    const offset = 0 //(req.query.page * pageSize) - pageSize
    const limit = (req.query.page * pageSize)//pageSize

    let objFilter = {}

    objFilter.titulo = {[Op.like]: `%${req.query.input}%`}
    objFilter.stock = {[Op.ne]: 0}
    objFilter.precio = {[Op.between]: [req.query.min, req.query.max]}

    if(req.query.category!==''){
        objFilter.categorias = req.query.category  
    }

    Products.findAll({
        limit,
        offset,
        where: objFilter
    })
        .then(products => res.json(products))


})
// BUSQUEDA ANTERIOR ( REEMPLAZADA POR BUSQUEDA /SEARCH)
// Action-creator linea 32
Router.get(`/:search`, (req, res) => {
    Products.findAll({
        where: {
            titulo: {
                [Op.like]: `%${req.params.search}%`
            },
            stock: {
                [Op.ne]: 0
            }
        }
    })
        .then(products => res.json(products))


})
// =====  EXTRACCION DE TODA LA DATA =======
// ==== Extraccion de toda la base (provisoriamente)


Router.get('/', (req, res) => {
    Products.findAll({
        limit: 8,
        where: {
            stock: {
                [Op.ne]: 0
            }
        }
    })
        .then(products => res.json(products))
})

// =====  EXTRACCION DE TODA LA DATA POR CATEGORIA =======
Router.get('/categoria/:category', (req, res) => {
    
    let pageSize = 8;
    const offset = 0 //(req.query.page * pageSize) - pageSize
    const limit = (req.query.page * pageSize)//pageSize

    let objFilter = {}
    objFilter.categorias = req.params.category
    objFilter.stock = {[Op.ne]: 0}
    objFilter.precio = {[Op.between]: [req.query.min, req.query.max]}

    if(req.query.category!==''){
        objFilter.categorias = req.query.category  
    }

    Products.findAll({
        limit,
        offset,
        where: objFilter
    })
        .then(products => res.json(products))

})

module.exports = Router
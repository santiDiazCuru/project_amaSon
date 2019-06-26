const express = require("express")
const Router = express.Router()
const Products = require("../models").Products
const Category = require("../models").Category

var Sequelize = require('sequelize');
const Op = Sequelize.Op

// RUTA SOLO USO DE TEST
Router.get('/prueba', (req, res) => {
    
    Products.findOne({
        attributes:[
            [Sequelize.fn('min', Sequelize.col('precio')),'min'],
            [Sequelize.fn('max', Sequelize.col('precio')),'max'],
            [Sequelize.fn('count', Sequelize.col('precio')),'count']
        ]
    })
        .then(products => res.json(products))
})

//AGREGAR UN NUEVO PRODUCTO
Router.post(`/`, (req, res) => {
    Products.create(req.body)
    .then(product=>{
        //console.dir(product.addCategory)
        let arr = req.body.category
        
        for (var i=0; i< arr.length; i++){
            Category.findOrCreate({
                where:{
                    categoria:arr[i]
                }
            }).then(category => {
                console.log(category[0].dataValues.id)
                // instancia del producto creado
                product.addCategory(category[0].dataValues.id)
            })
        }
       
    })
    .then(res => res.json(res))
    .catch(err => res.json(err))
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
        where: objFilter,
    })
        .then(products => {
            res.json(products)})


})
Router.get('/listCategory', (req, res) => {
    Category.findAll({
        attributes: ['categoria'],
    })
    .then(list => res.json(list))
})

// LIMITES para obtener Max, Min y Count
Router.get('/limite', (req, res) => {
    let objFilter = {}
    console.log(req.query,"param")
    objFilter.titulo = {[Op.like]: `%${req.query.input}%`}
    objFilter.stock = {[Op.ne]: 0}
    objFilter.precio = {[Op.between]: [req.query.min, req.query.max]}

    if(req.query.category!==''){
        objFilter.categorias = req.query.category  
    }

    Products.findOne({
        attributes:[
            [Sequelize.fn('min', Sequelize.col('precio')),'min'],
            [Sequelize.fn('max', Sequelize.col('precio')),'max'],
            [Sequelize.fn('count', Sequelize.col('precio')),'count']
        ],
        where: objFilter
    })
        .then(data => {
            res.json(data)})
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
        limit: 88,
        where: {
            stock: {
                [Op.ne]: 0
            }
        },
        include: [{
            model: Category,
            as: 'category',
            where: {categoria: "televisores"},
            attributes: ['id', 'categoria']
          }]
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
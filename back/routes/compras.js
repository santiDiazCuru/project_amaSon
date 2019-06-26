const express = require("express");
const Router = express.Router();
const Compra = require('../models/index').Compras;
const OC = require('../models/index').OC;
const Product = require('../models/index').Products;


Router.get('/carrito/:id',function(req,res){
    OC.findOne({where:{
        userId: req.params.id,
        estado: 'carrito'
    }})
    .then((OC)=>{
         return Compra.findAll({where: {
            OCId: OC.id
        },
    include: {
        model: Product,
        as: 'product',
        attributes: ['img1', 'titulo', 'precio']
    }, order:[['id', 'DESC']]
    })})
    .then((compras)=>res.json(compras))
})
Router.put('/update/:compraId', function(req,res){
    // console.log('hoalallala:',req.body, req.params.compraId)
    Compra.update({cantidad: req.body.nuevaCantidad},{where:{id: req.params.compraId }})
    .then(()=>res.send('cantidad actualizada!'))
})

Router.get(`/delete/:compraId`, function(req,res){
    console.log('entra a la ruta en el back')
    Compra.destroy({where: {id: req.params.compraId}})
    .then((compra)=>{
        console.log('hice algo: ', compra)})
        res.send('producto eliminado')
})

Router.get('/:id', function(req,res){
    OC.findAll({where: {
        userId: req.params.id
    }})
    .then((compras)=>res.json(compras))
})

Router.post('/add/:userId', function(req,res){
    console.log(req.body.productId, req.params.userId)
    OC.findOrCreate({where: {
        userId: req.params.userId,
        estado: 'carrito'
    }})
    .then((result)=>{
    return Compra.findOrCreate({where: {
        productId: req.body.productId,
        OCId: result[0].id
    }})    
    })
    .then((result)=>{
        if(!result[1]){
            result[0].cantidad = result[0].cantidad +1;
            result[0].save().then(()=>{
                console.log(' entro al if   terminadoooo')})
                res.send('listoo')
        }
        else{
            console.log('esntro al else')
            res.send('entro al else  tambmien listoo')}
    })
})

//Ejemplo de find or create
// User
//   .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
//   .then(([user, created]) => {
//     console.log(user.get({
//       plain: true
//     }))
//     console.log(created)

module.exports = Router;




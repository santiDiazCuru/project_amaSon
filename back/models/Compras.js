const Sequelize = require('sequelize');
const db = require('./database')
const OC = require('./OrdenesDeCompra')
const Product = require('./Products')

var Compra = db.define('compras', {

    cantidad : {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }

})

Compra.belongsTo(OC, {as: 'OC'})
Compra.belongsTo(Product, {as: 'product'})


//ID de la orden de compra, y del producto salen por relacion

module.exports = Compra
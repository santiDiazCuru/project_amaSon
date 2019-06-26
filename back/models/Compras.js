var db = require('./database');
var Sequelize = require('sequelize');
var OC = require('./OrdenesDeCompra');
var Product = require('./Products');

var Compra = db.define('compras', {

    cantidad: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }

})

Compra.addComprasWithOC = function (cantidad, productId, OCid) {
    return Compra.create({ cantidad: cantidad })
        .then(compra => {
            var setProduct = compra.setProduct(productId);
            var setOC = compra.setOC(OCid)
            return Promise.all([setProduct, setOC])
        })
}

// Compra.belongsTo(OC, { as: 'OC' })
// Compra.belongsTo(Product, { as: 'Product' })

module.exports = Compra;
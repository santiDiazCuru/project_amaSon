var Sequelize = require('sequelize');
var db = require('./database');
const User = require('./Users')
const Product = require('./Products')

var Review = db.define('reviews', {

    valoracion: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comentario: {
        type: Sequelize.STRING
    }

});

Review.belongsTo(User, {as: 'user'} )
Review.belongsTo(Product, {as: 'product'})

//idProducto viene de la relacion
//idUser viene de la relacion!
module.exports = Review

//fijarse si se crea la tabla....maldito sequelize
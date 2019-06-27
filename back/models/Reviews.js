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


module.exports = Review
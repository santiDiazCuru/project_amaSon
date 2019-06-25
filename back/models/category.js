var db = require('./database');
var Sequelize = require('sequelize');


var Categoria = db.define('categorias', {

    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Categoria;



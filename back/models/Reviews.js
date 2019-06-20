var db = require('./database');
var Sequelize = require('sequelize');

var Review = db.define('reviews', {

    valoracion: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comentario: {
        type: Sequelize.STRING
    }
});

//idProducto viene de la relacion
//idUser viene de la relacion!
module.exports = Review;

//fijarse si se crea la tabla....maldito sequelize
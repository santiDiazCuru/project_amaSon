var db = require('./database');
var Sequelize = require('sequelize');


var Product = db.define('productos', {
  
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0.00,
    },
    stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    img1: {
        type: Sequelize.STRING,
        defaultValue: "https://www.claroplay.com/images/carousel/noimage_poster.png?_v=0.5.2",
    },
    img2: {
        type: Sequelize.STRING,
        defaultValue: "https://www.claroplay.com/images/carousel/noimage_poster.png?_v=0.5.2",
    },
    img3: {
        type: Sequelize.STRING,
        defaultValue: "https://www.claroplay.com/images/carousel/noimage_poster.png?_v=0.5.2",
    },
    valoracion:{
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0.00,
    },
    categorias: {
        type: Sequelize.STRING
    }

});

module.exports = Product;


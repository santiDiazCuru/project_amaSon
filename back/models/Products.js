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
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySeSCBK0wVu7ecVH9MnFRd8Orchj6KfNOuQV_6D--Z72m2SGE",
    },
    img2: {
        type: Sequelize.STRING,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySeSCBK0wVu7ecVH9MnFRd8Orchj6KfNOuQV_6D--Z72m2SGE",
    },
    img3: {
        type: Sequelize.STRING,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySeSCBK0wVu7ecVH9MnFRd8Orchj6KfNOuQV_6D--Z72m2SGE",
    },
    valoracion:{
        type: Sequelize.VIRTUAL,
        defaultValue: 0
    }
});

module.exports = Product;
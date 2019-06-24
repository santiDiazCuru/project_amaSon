const Sequelize = require('sequelize');
const db = require('./database')
const User = require('./Users')

var OC = db.define('ordenes', {

    fecha: {
        type: Sequelize.DATE()
    },
    estado: {
        type: Sequelize.STRING,
        defaultValue: 'Carrito'
    }

})

OC.belongsTo(User, {as: 'user'})

module.exports = OC
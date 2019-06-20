var db = require('./database');
var Sequelize = require('sequelize');
const crypto = require('crypto');

var User = db.define('usuarios', {

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    },
    password: {
        type: Sequelize.STRING
    },
    salt: {
        type: Sequelize.STRING
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});

//HOOK PARA HASHEAR LA PSWD Y CREAR UN SALT ANTES DE GUARDAR EL USER 
User.addHook('beforeCreate', (user) => {
    user.salt = crypto.randomBytes(20).toString('hex');
    user.password = user.hashPassword(user.password);
})
//METODO DE INSTANCIA QUE HASHEA LO QUE SE LE PASA COMO ARGUMENTO (LE SUMA EL SALT) 
User.prototype.hashPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}
//mETODO DE INSTANCIA QUE SE PUEDE USAR PARA VALIDAR LA CONTRASEÑA PERRO!!!!!!!
User.prototype.validPassword = function (password) {
    return this.password === this.hashPassword(password);
}

module.exports = User
var db = require('./database');
var Sequelize = require('sequelize');
var Compra = require('./Compras')

var OC = db.define('ordenes', {

    fecha:{
        type: Sequelize.DATE()
    },
    estado:{
        type: Sequelize.STRING
    }

})

OC.prototype.addCompra = function(cantidad, productId){
    console.log('entra a add compra')
   return Compra.addComprasWithOC(cantidad,productId,this.id)
    .then(data=>console.log('este es el resultadofinal: ',data))
} 


module.exports = OC;


// Task.prototype.addChild = function (child) {
//     return Task.create({ name: child.name })
//       .then((child) => {
//         return child.setParent(this)
//       })
//   }
  
//   Task.prototype.getChildren = function () {
//     return Task.findAll({ where: { parentId: this.id } })
//   }
  
//   Task.prototype.getSiblings = function () {
//     return Task.findAll({
//       where: {
//         parentId: this.parentId,
//         id: {
//           [Op.ne]: this.id
//         }
//       }
//     })
  
//   }
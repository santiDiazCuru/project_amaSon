const Products = require('./Products')
const Category = require('./category')
const Compras = require('./Compras')
const OC = require('./OrdenesDeCompra')
const User = require('./Users')
const Review = require('./Reviews')

// through => Crea tabla de relacion
Category.belongsToMany(Products, { as: "product", through: 'ProductCategory', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Products.belongsToMany(Category, { as: "category", through: 'ProductCategory', onDelete: 'CASCADE', onUpdate: 'CASCADE' })


OC.belongsTo(User, {as: 'user'})
User.hasMany(OC, {as: 'ordenes'})

Compras.belongsTo(OC, {as: 'OC'})
Compras.belongsTo(Products, {as: 'product'})

OC.hasMany(Compras, {as: 'compras'})

User.hasMany(Review, {as: 'reviews'})
Review.belongsTo(User, {as: 'user'})

Review.belongsTo(Products, {as: 'product'})
Products.hasMany(Review, {as: 'reviews'})

module.exports = {
    Products,
    Category,
    OC,
    User,
    Compras,
    Review
}
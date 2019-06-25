const Products = require('./Products')
const Category = require('./category')

// through => Crea tabla de relacion
Category.belongsToMany(Products, { as: "product", through: 'ProductCategory' })
Products.belongsToMany(Category, { as: "category", through: 'ProductCategory' })

module.exports = {
    Products,
    Category
}
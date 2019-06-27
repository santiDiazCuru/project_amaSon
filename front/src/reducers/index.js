import { combineReducers } from 'redux';
import product from './products_reducer'
import user from './users_reducer'
import users from './fetch_users'
import shoppingAll from './fetch_all_shoping'
import singleProduct from './fetch_single_product_reducer'
import compras from './compras_reducers'
import productReviews from './fetch_reviews'
import localCarrito from './carrito_reducer'

import alert from './alert_reducer'

export default combineReducers({
    product,
    singleProduct,
    user,
    users,
    compras,
    productReviews,
    alert,
<<<<<<< HEAD
    shoppingAll
=======
    localCarrito
>>>>>>> bf3794502f1a2797f56f32be89756de758bd139a
});
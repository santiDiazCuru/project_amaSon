import { combineReducers } from 'redux';
import product from './products_reducer'
import user from './users_reducer'
import users from './fetch_users'
import shoppingAll from './fetch_all_shoping'
import singleProduct from './fetch_single_product_reducer'
import compras from './compras_reducers'

export default combineReducers({
    product,
    singleProduct,
    user,
    users,
    shoppingAll
    users,
    compras
});
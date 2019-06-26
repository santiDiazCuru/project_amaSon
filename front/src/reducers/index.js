import { combineReducers } from 'redux';
import product from './products_reducer'
import user from './users_reducer'
import users from './fetch_users'
import singleProduct from './fetch_single_product_reducer'

export default combineReducers({
    product,
    singleProduct,
    user,
    users
});
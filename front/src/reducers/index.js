import { combineReducers } from 'redux';
import product from './products_reducer'
import user from './users_reducer'
import users from './fetch_users'
import compras from './compras_reducers'

export default combineReducers({
    product,
    user,
    users,
    compras
});
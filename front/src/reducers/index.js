import { combineReducers } from 'redux';
import product from './products_reducer'
import user from './users_reducer'
import users from './fetch_users'
import shoppingAll from './fetch_all_shoping'

export default combineReducers({
    product,
    user,
    users,
    shoppingAll
});
import { combineReducers } from 'redux';
import product from './products_reducer'
import user from './users_reducer'
import users from './fetch_users'

export default combineReducers({
    product,
    user,
    users
});
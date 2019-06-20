import { combineReducers } from 'redux';
import product from './products_reducer'
import user from './users_reducer'

export default combineReducers({
    product,
    user
});
import {FETCH_ALL_USERS} from '../constants';

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:{
            return Object.assign({}, state, { users: action.users })
        }
        default:
            return state
    }
}
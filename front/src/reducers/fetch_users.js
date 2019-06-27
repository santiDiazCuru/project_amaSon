import {FETCH_ALL_USERS, CHANGE_ADMIN_STATUS} from '../constants';

const initialState = {
    users: [],
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:{
            return Object.assign({}, state, { users: action.users })
        }
        case CHANGE_ADMIN_STATUS:{
            return Object.assign({}, state, { user: action.user })
        }
        default:
            return state
    }
}
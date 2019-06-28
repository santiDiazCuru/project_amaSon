import { FETCH_ALL_SHOPPING } from '../constants';
const initialState = {
    shopping: []
}

export default ( state= initialState, action ) => {
    switch(action.type) {
        case FETCH_ALL_SHOPPING: {
            return Object.assign({}, state, { shopping: action.shopping})
        }
        default:
            return state;
    }
}


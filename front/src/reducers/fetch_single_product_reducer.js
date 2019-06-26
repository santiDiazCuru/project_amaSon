import {FETCH_SINGLE_PRODUCT} from '../constants';

const initialState = {
    singleProduct: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_PRODUCT:{
            return Object.assign({}, state, { singleProduct: action.product })
        }
        default:
            return state
    }
}
import { FETCH_REVIEWS } from '../constants';

const initialState = {
    productReviews: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REVIEWS:{
            return Object.assign({}, state, { productReviews: action.reviews })
        }
        default:
            return state
    }
}
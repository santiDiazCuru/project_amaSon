import { FETCH_PRODUCTS } from '../constants'
const initialState = {
    productos: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return Object.assign({}, state, { productos: action.product })
        default:
            return state
    }
}

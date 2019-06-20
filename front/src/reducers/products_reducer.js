import { FETCH_PRODUCTS, FETCH_ALL_PRODUCTS } from '../constants'
const initialState = {
    productos: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return Object.assign({}, state, { productos: action.productos })

        case FETCH_ALL_PRODUCTS:
            return Object.assign({}, state, { productos: action.productos })

        default:
            return state
    }
}

import {SET_LOCAL_CARRITO, EMPTY_LOCAL_CARRITO} from '../constants';

const initialState = {
    localCarrito: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCAL_CARRITO:
            return {
            ...state,
           localCarrito: action.productos
        }
        case EMPTY_LOCAL_CARRITO:
          return {
            ...state,
            localCarrito: []
        }
        default:
            return state
    }
}

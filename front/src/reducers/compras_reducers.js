import {FETCH_ORDENES, FETCH_CARRITO} from '../constants';

const initialState = {
    userOrdenes: [],
    userCarrito: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDENES:{
            return Object.assign({}, state, { userOrdenes: action.ordenes })
        }
        case FETCH_CARRITO:{
            console.log('actualizando carrito')
            return Object.assign({}, state, { userCarrito: action.carrito })
        }
        default:
            return state
    }
}
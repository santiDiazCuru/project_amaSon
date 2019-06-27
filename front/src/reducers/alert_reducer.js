import {SET_ALERT} from '../constants';

const initialState = {
    mensaje:'',
    tipo:'',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:{
            return Object.assign({}, state, { 
                mensaje: action.mensaje,
                tipo: action.tipo,
             })
        }

        
        default:
            return state
    }
}
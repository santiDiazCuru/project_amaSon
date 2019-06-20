import {LOG_IN_USER} from '../constants';

const initialState = {
    currentUser: {},
    isLoggedIn: false
}
//Entonces este initial state setea el estado por defecto del users reducer como que el usuario actual esta vacío
//(es un objeto vacío porque de la DB llega como un objeto cada usuario). Pero además, setea el campo isLoggedIn
//a false ya que despues para renderizar los componentes según el usuario esté loggeado o no, no se puede
//preguntar if(currentUser) ya que los objetos vacíos siempre devuelven true...

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_USER:{
            return Object.assign({}, state, { currentUser: action.user, isLoggedIn: true })}
        default:
            return state
    }
}
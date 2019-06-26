import { LOG_IN_USER, LOG_OUT_USER } from "../constants"
import Axios from "axios"

const logInUser = (user) => ({
    type: LOG_IN_USER,
    user
});
const logOutUser = () => ({
    type: LOG_OUT_USER
})

// Esta funcion es llamada cuando se clickea en el boton LOG IN. va a la base de datos
// a buscar un usuario que matchee con el username ingresado (todavía no valida con contraseña :(( )
//despues setea el estado del store y queda con un campo user que a su vez tiene un campo currentUser
// y otro isLoggedIn (por defecto este ultimo es false asi cualquiera puede acceder y elegir que componentes
// renderizar segun si hay alguien loggeado o no)

//el objeto state tiene el campo users que se ve así:
// user: {
//     currentUser: {id: 1, username: "pok", email: "pok@pok", password: "20ff13269cc3180d972b28d438c415852a955b3a", salt: "5e53edf453a4df378ebeee0957eaafb5868b6e73"},
//     isLoggedIn: true
// }

export const validateUser = (userData) => dispatch => {
    return Axios.post('/api/users/login', userData)
        .then((user) => dispatch(logInUser(user.data)))
}

export const validateSession = () => dispatch => {
   return Axios.get('/api/users/isLoggedIn')
        .then((user) => {
            dispatch(logInUser(user.data))
        })
}
export const endSession = () => dispatch => {
    Axios.get('/api/users/logout')
        .then((msg) => { dispatch(logOutUser()) })
}
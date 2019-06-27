import { LOG_IN_USER} from "../constants"
import Axios from "axios"
import {validateUser} from './logInUser'

// la funcion de registerUser hace solo un axios con un post para crear un nuevo user en la DB.
// recibe un argumento(newUserInfo) que es un objeto que viene seteado ya con la data del nuevo usuario 
//tomada de los inputs del RegisterContainer

// luego llama a logInUser y hace que se setee el usuario en el estado del store!

const logInUser = (user) => ({
    type: LOG_IN_USER,
    user
});

export const registerUser = (newUserInfo) => dispatch => {
    return Axios.post('/api/users/register', newUserInfo)
    .then((newUser)=>dispatch(logInUser(newUser.data)))
}


import { FETCH_ALL_USERS } from "../constants"
import Axios from "axios"
import store from '../store'


const allUsers = (users) => ({
    type: FETCH_ALL_USERS,
    users
});

// BUSCA TODOS LOS USUARIOS
export const fetchAllUsers = () => dispatch => {
    Axios.get(`api/users`)
        .then(users => {
            dispatch(allUsers(users.data))})
}
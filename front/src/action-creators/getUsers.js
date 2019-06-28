import { FETCH_ALL_USERS, CHANGE_ADMIN_STATUS } from "../constants"
import Axios from "axios"
import store from '../store'


const allUsers = (users) => ({
    type: FETCH_ALL_USERS,
    users
});

const changeStatus = (user) => ({
    type: CHANGE_ADMIN_STATUS,
    user
})

// const userToDelete = (user) => ({
//     type: DELETE_USER,
//     user
// })

// BUSCA TODOS LOS USUARIOS
export const fetchAllUsers = () => dispatch => {
    Axios.get(`api/users`)
        .then(users => {
            dispatch(allUsers(users.data))})
}

//ELIMINA A UN USUARIO
export const deleteUser = (id) => dispatch => {
    return Axios.get(`/api/users/delete/${id}`)
        .then(user => {
            dispatch(fetchAllUsers())
    })
}

//CAMBIA ESTADO DE ADMIN
export const changeAdminStatus = (id, value) => dispatch => {
    console.log(id,value)
    return Axios.put(`/api/users/changeAdminStatus/${id}`, {isAdmin: value})
    // .then(user => {
    //     dispatch(changeStatus(user))
    // })
}
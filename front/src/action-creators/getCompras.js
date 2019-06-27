import { FETCH_ORDENES, FETCH_CARRITO } from "../constants"
import Axios from "axios"

const userOrdenes = (ordenes) => ({
    type: FETCH_ORDENES,
    ordenes
})
const userCarrito = (carrito) => ({
    type: FETCH_CARRITO,
    carrito
})

export const getOrdenes = (userId) => dispatch => {
    return Axios.get(`/api/compras/${userId}`)
        .then((compras) => dispatch(userOrdenes(compras.data)))
}
export const getCarrito = (userId) => dispatch => {
    return Axios.get(`/api/compras/carrito/${userId}`)
        .then((carrito)=> dispatch(userCarrito(carrito.data)))
}
export const changeStatus = (newStatus, userId) => {
    return Axios.patch(`/api/compras/status/${userId}`, {newStatus})
}

export const updateCantidad = (compraId, nuevaCantidad, userId) => {
   return Axios.put(`/api/compras/update/${compraId}`, {nuevaCantidad})
}
export const deleteCompra = (compraId) => {
    console.log('llama a delete compra')
    return Axios.get(`/api/compras/delete/${compraId}`)
}
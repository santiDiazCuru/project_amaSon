import { FETCH_ORDENES, FETCH_CARRITO, ORDEN_CARRITO } from "../constants"
import Axios from "axios"

const userOrdenes = (ordenes) => ({
    type: FETCH_ORDENES,
    ordenes
})
const userCarrito = (carrito) => ({
    type: FETCH_CARRITO,
    carrito
})
const carritoOrden = (orden) => ({
    type: ORDEN_CARRITO,
    orden
})

export const getOrdenes = (userId) => dispatch => {
    return Axios.get(`/api/compras/${userId}`)
        .then((compras) => dispatch(userOrdenes(compras.data)))
}
export const getOrdenCarrito = (userId) => dispatch => {
    return Axios.get(`/api/compras/updatecarrito/${userId}`)
        .then((compras) => dispatch(carritoOrden(compras.data)))
}
export const getCarrito = (userId) => dispatch => {
    return Axios.get(`/api/compras/carrito/${userId}`)
        .then((carrito)=> dispatch(userCarrito(carrito.data)))
}
export const changeStatus = (newStatus, userId) => {
    return Axios.patch(`/api/compras/status/${userId}`, {newStatus})
}
export const changeOCStatus = (newStatus, OCid) => {
    return Axios.patch(`api/compras/status`, {newStatus: newStatus, OCid: OCid})
}

export const updateCantidad = (compraId, nuevaCantidad, userId) => {
   return Axios.put(`/api/compras/update/${compraId}`, {nuevaCantidad})
}
export const deleteCompra = (compraId) => {
    console.log('llama a delete compra')
    return Axios.get(`/api/compras/delete/${compraId}`)
}
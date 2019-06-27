import Axios from "axios"
import { SET_LOCAL_CARRITO, EMPTY_LOCAL_CARRITO } from '../constants'

//este componente no necesita actions porque no setea ninigun estado.
//solo hace un axios y agrega items a la lista del carrito
const setCarrito = (productos) => ({
    type: SET_LOCAL_CARRITO,
    productos
})
const emptyCarrito = () => ({
    type: EMPTY_LOCAL_CARRITO,
})

export const addItem = (productId, userId) => {
    return Axios.post(`/api/compras/add/${userId}`, { productId })
}
export const vaciarCarrito = (userId) => {
    return Axios.get(`/api/compras/empty/${userId}`)
}

export const setLocalCarrito = (producto) => dispatch => {
    let miStorage = window.localStorage;
    let carrito = JSON.parse(miStorage.getItem('carrito'))
    console.log(producto)
    if (carrito) {
        producto['cantidad'] = 1;
        let repetido = false
        console.log('soy el carrito antes de setear cantidades: ',carrito)
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == producto.id) {
                console.log('los id matchean')
                carrito[i].cantidad = carrito[i].cantidad + 1
                repetido = true
            }
        }
        console.log('soy el carrtiyo despuesde setear cantidades: ', carrito)
        if (repetido) {
            miStorage.setItem("carrito", JSON.stringify(carrito))
            let localCart = JSON.parse(miStorage.getItem("carrito"))
            console.log('soy lo que se setea en el localStorage:', localCart)
            dispatch(setCarrito(localCart))
        }
        else {
            let newCarrito = [...carrito, producto]
            miStorage.setItem("carrito", JSON.stringify(newCarrito))
            let localCart = JSON.parse(miStorage.getItem("carrito"))
            console.log('soy lo que entra al else:', localCart)
            dispatch(setCarrito(localCart))
        }
    }
    else {
        console.log()
        producto['cantidad'] = 1;
        miStorage.setItem('carrito', JSON.stringify([producto]))
        dispatch(setCarrito([producto]))
    }
}
export const deleteLocalCarrito = (productId) => {
    let miStorage = window.localStorage;
    let newCarrito = [];
    let carrito = JSON.parse(miStorage.getItem('carrito'))
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id !== productId) newCarrito.push(carrito[i])
    }
    miStorage.setItem("carrito", JSON.stringify(newCarrito))
    let localCart = JSON.parse(miStorage.getItem("carrito"))
    dispatch(setCarrito(localCart))
}
export const vaciarLocalCarrito = () => dispatch => {
    window.localStorage.clear()
    dispatch(emptyCarrito())
}

import Axios from "axios"

//este componente no necesita actions porque no setea ninigun estado.
//solo hace un axios y agrega items a la lista del carrito

export const addItem = (productId, userId) => {
    return Axios.post(`/api/compras/add/${userId}`, { productId })
}
export const vaciarCarrito = (userId) => {
    return Axios.get(`/api/compras/empty/${userId}`)
}

export const addLocalCarrito = (productId) => {
    let miStorage = window.localStorage;
    let item = miStorage.getItem(productId)
    if (item) {
        return 'el producto ya está en el carrito'
    }
    miStorage.setItem(productId, productId)
    return 'OK'
}
export const deleteLocalCarrito = (productId) => {
    let miStorage = window.localStorage;
    miStorage.removeItem(productId)
    return 'producto eliminado'
}
export const vaciarLocalCarrito = () => {
    let miStorage = window.localStorage;
    miStorage.clear()
    return 'OK'
}

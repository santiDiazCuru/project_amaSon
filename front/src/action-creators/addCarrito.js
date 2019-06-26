import Axios from "axios"

//este componente no necesita actions porque no setea ninigun estado.
//solo hace un axios y agrega items a la lista del carrito

export const addItem = (productId, userId) => {
    console.log('entra a la funcion con el pid:', productId, 'y el uid', userId)
    return Axios.post(`/api/compras/add/${userId}`, {productId})
}

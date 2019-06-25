import { FETCH_CARRITO } from "../constants"
import Axios from "axios"

const userCarrito = (carrito) => ({
    type: FETCH_CARRITO,
    enCarrito: carrito

})
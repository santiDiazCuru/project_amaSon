import { FETCH_PRODUCTS } from "../constants"
import Axios from "axios"
import store from '../store'
const addProducts = (productos) => ({
    type: FETCH_PRODUCTS,
    productos
});

export const fetchProducts = (input) => {
    console.log(input)
    Axios.get(`/api/products/${input}`)
        .then(productos => store.dispatch(addProducts(productos.data)))
        
}
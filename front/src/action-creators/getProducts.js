import { FETCH_PRODUCTS, FETCH_ALL_PRODUCTS } from "../constants"
import Axios from "axios"
import store from '../store'

const addProducts = (productos) => ({
    type: FETCH_PRODUCTS,
    productos
});

const allProducts = (productos) => ({
    type: FETCH_ALL_PRODUCTS,
    productos
});

export const fetchProducts = (input) => dispatch => {
    Axios.get(`/api/products/${input}`)
        .then(productos => dispatch(addProducts(productos.data))) 
}

// BUSCA TODO LOS PRODUCTOS
export const fetchAllProducts = () => dispatch => {
    Axios.get(`/api/products/`)
        .then(productos => dispatch(allProducts(productos.data)))   
}

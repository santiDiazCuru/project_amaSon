import { FETCH_PRODUCTS, FETCH_ALL_PRODUCTS, FETCH_ALL_PRODUCTS_CATEGORY } from "../constants"
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

const allProductsCategory = (productos) => ({
    type: FETCH_ALL_PRODUCTS_CATEGORY,
    productos
});
export const fetchProducts = (input) => dispatch => {
    console.log(input,"jjjjjjj")
    Axios.get(`/api/products/${input}`)
        .then(productos => dispatch(addProducts(productos.data))) 
}

// BUSCA TODO LOS PRODUCTOS PARA HOME
export const fetchAllProductsHome = () => dispatch => {
    Axios.get(`/api/products/`)
        .then(productos => dispatch(allProducts(productos.data)))   
}

// BUSCA TODO LOS PRODUCTOS PARA CATEGORIA
export const fetchAllProducts = (category) => dispatch => {
    Axios.get(`/api/products/categoria/${category}`)
        .then(productos => dispatch(allProductsCategory(productos.data))) 
        .then((data)=>{
            console.log(data, "DATAAA")
        })  
}
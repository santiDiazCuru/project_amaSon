import { FETCH_PRODUCTS, FETCH_ALL_PRODUCTS, FETCH_ALL_PRODUCTS_CATEGORY } from "../constants"
import Axios from "axios"
import store from '../store'

const addProducts = (productos, inputValue, filterCategory, filterPriceMin, filterPriceMax, page, totalPages) => ({
    type: FETCH_PRODUCTS,
    productos, inputValue, filterCategory, filterPriceMin, filterPriceMax, page, totalPages
});


const allProducts = (productos) => ({
    type: FETCH_ALL_PRODUCTS,
    productos
});

const allProductsCategory = (productos,filterCategory,filterPriceMin,filterPriceMax,page,totalPages) => ({
    type: FETCH_ALL_PRODUCTS_CATEGORY,
    productos,
    filterCategory,
    filterPriceMin,filterPriceMax,page,totalPages
});

export const fetchProducts = (input, category, min, max, page) => dispatch => {
    let Minuscula = input.toLowerCase()
    Axios.get('/api/products/search/', {
        // Asignamos el valor de userInfo a params
        params: {
            input: Minuscula,
            min,
            max,
            category,
            page
        }
    })
        //Axios.get(`/api/products/${Minuscula}`)
        .then(productos => dispatch(addProducts(productos.data, Minuscula, category, min, max, page, 2)))
    //ver filtro de categoria
}

// BUSCA TODO LOS PRODUCTOS PARA HOME
export const fetchAllProductsHome = () => dispatch => {
    Axios.get(`/api/products/`)
        .then(productos => dispatch(allProducts(productos.data)))
}

// BUSCA TODO LOS PRODUCTOS PARA CATEGORIA
export const fetchAllProducts = (category, min, max, page) => dispatch => {
    Axios.get(`/api/products/categoria/${category}`, {
        // Asignamos el valor de userInfo a params
        params: {
            min,
            max,
            category,
            page
        }
    })
        .then(productos => dispatch(allProductsCategory(productos.data, category, min, max, page, 2)))
}



import { FETCH_SINGLE_PRODUCT } from "../constants"
import Axios from "axios"
import store from '../store'


const singleProduct = (product) => ({
    type: FETCH_SINGLE_PRODUCT,
    product
});

// BUSCA PRODUCTO POR ID
export const fetchSingleProduct = (id) => dispatch => {
    Axios.get(`/api/products/singleView/${id}/`)
        .then(product => {
            console.log("ESTO ES EL ACTION", id)
            dispatch(singleProduct(product.data))})
}
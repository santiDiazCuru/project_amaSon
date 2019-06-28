import { FETCH_REVIEWS } from "../constants"
import Axios from 'axios';

const getReviews = (reviews) => ({
    type: FETCH_REVIEWS,
    reviews
});

//POSTEA UNA NUEVA REVIEW
export const postReviews = (body) => dispatch => {
    // console.log("LLEGO O NO ACA??!!??!", body)
    return Axios.post('/api/reviews', body)
        .then(reviews => {
            console.log("SOY BODYYY", body)
        })
}

//BUSCA LAS REVIEWS DE UN PRODUCTO
export const fetchReviews = (productId) => dispatch => {
    return Axios.get(`/api/reviews/${productId}/singleReview/`)
        .then(reviews => {
            dispatch(getReviews(reviews.data))
        })
}
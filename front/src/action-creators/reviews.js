import { FETCH_REVIEWS } from "../constants"
import Axios from 'axios';

const getReviews = (reviews) => ({
    type: FETCH_REVIEWS,
    reviews
});

//POSTEA UNA NUEVA REVIEW
export const postReviews = (body) => {
    return Axios.post('/api/reviews', body)
}

//BUSCA LAS REVIEWS DE UN PRODUCTO
export const fetchReviews = (productId) => dispatch => {
    return Axios.get(`/api/reviews/${productId}/singleReview`)
        .then(reviews => {
            dispatch(getReviews(reviews.data))
        })
}
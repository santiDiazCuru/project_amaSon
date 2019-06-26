import axios from 'axios';

export const postReviews = (body) => {
    console.log("estoy en el axiosssssss")
    return axios.post('/api/reviews', body)
}
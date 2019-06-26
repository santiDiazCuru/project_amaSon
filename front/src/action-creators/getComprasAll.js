import { FETCH_ALL_SHOPPING } from "../constants";
import Axios from "axios";


const allShopping = (shopping) => ({
    type : FETCH_ALL_SHOPPING,
    shopping
});

export const fetchAllShoping = () => dispatch => {
    Axios.get('./api/compras')
    .then(shopping => dispatch(allShopping(shopping)));
};


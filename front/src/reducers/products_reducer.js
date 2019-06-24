import { FETCH_PRODUCTS, FETCH_ALL_PRODUCTS, FETCH_ALL_PRODUCTS_CATEGORY } from '../constants'
const initialState = {
    productos: [],
    productosHome: [],
    inputValue: '',
    filterCategory: '',
    filterPriceMin: 0,
    filterPriceMax: 0,
    page: 1,
    totalPages: 1
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return Object.assign({}, state, {
                productos: action.productos,
                inputValue: action.inputValue,
                filterCategory: action.filterCategory,
                filterPriceMin: action.filterPriceMin,
                filterPriceMax: action.filterPriceMax,
                page: action.page,
                totalPages: action.totalPages
            })

        case FETCH_ALL_PRODUCTS:
            return Object.assign({}, state, { productosHome: action.productos })


        case FETCH_ALL_PRODUCTS_CATEGORY:
            return Object.assign({}, state, { productos: action.productos,
                filterCategory: action.filterCategory,
                filterPriceMin: action.filterPriceMin,
                filterPriceMax: action.filterPriceMax,
                page: action.page,
                totalPages: action.totalPages })

        default:
            return state
    }
}

import {PRECIO_FILTRO} from '../constants'

const initialState = {
   priceMin:'',
   priceMax:''
}

export default (state = initialState, action) => {
   switch (action.type) {
       case PRECIO_FILTRO:{
           return Object.assign({}, state, { priceMin:action.priceMin, priceMax:action.priceMax })
       }
       default:
           return state
   }
}
import { PRECIO_FILTRO } from '../constants'

const precioObjeto = (priceMin,priceMax) => ({
   type: PRECIO_FILTRO,
   priceMin,priceMax
});

export const filtrarPrecio = (priceMin,priceMax) => dispatch => {
   return dispatch(precioObjeto(priceMin,priceMax))
}
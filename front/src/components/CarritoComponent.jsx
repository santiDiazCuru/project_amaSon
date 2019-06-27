import React from 'react';
import { Link } from 'react-router-dom'

export default ({ userCarrito, handleChange, handleDelete, handleClick, handleEmpty, isLoggedIn, localCarrito }) => {
  if (isLoggedIn && (userCarrito.length !== 0)) {
    return <div className='row'>
      <br />
      <br />

      <div className='panel panel-default'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Importe</th>
              <th>Quitar</th>

            </tr>
          </thead>
          <tbody>
            {userCarrito && userCarrito.map(item => {
              return (
                <tr key={item.id}>
                  <td className='casillaImg'><img className='img img-thumbnail' width='100px' height='100px' src={`${item.product.img1}`}></img></td>
                  <td className='casillaTitulo'>{item.product.titulo}</td>
                  <td className='casillaCantidad' className='cantidad'><input onClick={handleChange} name={`${item.id}`} defaultValue={`${item.cantidad}`} type='number' className='cantidad' min='1' /></td>
                  <td className='casillaImporte'>${item.cantidad * item.product.precio}</td>
                  <td className='casillaEliminar'><span style={{ cursor: 'pointer' }} id={`${item.id}`} onClick={handleDelete} className='glyphicon glyphicon-trash'></span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleClick} className='btn btn-default'>Comprar...</button>
      <button onClick={handleEmpty} className='btn btn-default'>Vaciar Carrito</button>

    </div>
  }
  else if (!isLoggedIn && (localCarrito.length !== 0)){
    return <div className='row'>
      <br />
      <br />

      <div className='panel panel-default'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Importe</th>
              <th>Quitar</th>

            </tr>
          </thead>
          <tbody>
            {localCarrito && localCarrito.map(item => {
              return (
                <tr key={item.id}>
                  <td className='casillaImg'><img className='img img-thumbnail' width='100px' height='100px' src={`${item.img1}`}></img></td>
                  <td className='casillaTitulo'>{item.titulo}</td>
                  <td className='casillaCantidad' className='cantidad'><input onClick={handleChange} name={`${item.id}`} defaultValue={item.cantidad} type='number' className='cantidad' min='1' /></td>
                  <td className='casillaImporte'>{item.precio * item.cantidad}</td>
                  <td className='casillaEliminar'><span style={{ cursor: 'pointer' }} id={`${item.id}`} onClick={handleDelete} className='glyphicon glyphicon-trash'></span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleClick} className='btn btn-default'>Comprar...</button>
      <button onClick={handleEmpty} className='btn btn-default'>Vaciar Carrito</button>

    </div>
  }
  else  {
    return <div className="row">
      <br/>
      <span><h3>No hay articulos en el carrito...</h3></span>
    </div>
  }
}

// [
//   {
//   "id": 13,
//   "cantidad": 3,
//   "createdAt": "2019-06-25T21:02:01.002Z",
//   "updatedAt": "2019-06-25T21:02:01.085Z",
//   "OCId": 4,
//   "productId": 6,
//   "ordeneId": null,
//   "product": {
//   "img1": "https://medias.musimundo.com/medias/sys_master/images/images/h0f/h73/10024042954782/00181176-136244-01.jpg",
//   "titulo": "notebook acer aspire 3 intel celeron",
//   "precio": "19999"
//   }
//   },
//]
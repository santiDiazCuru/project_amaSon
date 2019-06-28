import React from 'react';
import { Link } from 'react-router-dom'

export default ({ userCarrito, handleChange, handleDelete, handleClick, handleEmpty, isLoggedIn, localCarrito }) => {
  if (isLoggedIn && (userCarrito.length !== 0)) {
    return <div className='row'>
      Mi Carrito:&nbsp;
    <button onClick={handleClick} className='btn btn-success'>
    <span className="glyphicon glyphicon-credit-card" aria-hidden="true"></span> FINALIZAR COMPRA</button>
    &nbsp;<button onClick={handleEmpty} className='btn btn-default'>
    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> VACIAR CARRITO</button>
    <hr/>
      
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
                  <td style={({width: 100})} className='casillaImg'><img className='img img-thumbnail' width='60px' height='60px' src={`${item.product.img1}`}></img></td>
                  <td className='casillaTitulo' style={({textTransform: "capitalize", fontSize:16})}>{item.product.titulo}</td>
                  <td style={({width: 100})} className='casillaCantidad' className='cantidad'><input onClick={handleChange} name={`${item.id}`} defaultValue={`${item.cantidad}`} type='number' className='cantidad' min='1' style={({minWidth: "100%",height: 40,margin: 0, fontSize:16})}/></td>
                  <td style={({width: 100, fontSize:16})} className='casillaImporte'>${conversion(item.cantidad * item.product.precio)}</td>
                  <td style={({width: 100})} className='casillaEliminar'><span style={{ cursor: 'pointer',fontSize:23 }} id={`${item.id}`} onClick={handleDelete} className='glyphicon glyphicon-trash'></span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <hr/>
      <strong style={({
              height: 20,
              backgroundColor: "#783838",
              padding: 10,
              borderRadius: 5,
              color: "white",
        })}>SUMA TOTAL: $ {
          conversion(userCarrito.reduce((sum, item) => 
          sum + (item.cantidad * item.product.precio), 0))
        }</strong>
    </div>
  }
  else if (!isLoggedIn && (localCarrito.length !== 0)){
    return <div className='row'>
Mi Carrito:&nbsp;
    <button onClick={handleClick} className='btn btn-success'>
    <span className="glyphicon glyphicon-credit-card" aria-hidden="true"></span> FINALIZAR COMPRA</button>
    &nbsp;<button onClick={handleEmpty} className='btn btn-default'>
    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> VACIAR CARRITO</button>
    <hr/>
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
                  <td className='casillaImg' style={({width: 100})}><img className='img img-thumbnail' width='60px' height='60px' src={`${item.img1}`}></img></td>
                  <td className='casillaTitulo' style={({textTransform: "capitalize", fontSize:16})}>{item.titulo}</td>
                  <td className='casillaCantidad' className='cantidad' style={({width: 100})}>
                  <input onClick={handleChange} name={`${item.id}`} 
                  defaultValue={item.cantidad} type='number' className='cantidad' min='1' style={({minWidth: "100%",height: 40,margin: 0, fontSize:16})}/></td>
                  <td style={({width: 100, fontSize:16})} className='casillaImporte'>{conversion(item.precio * item.cantidad)}</td>
                  <td style={({width: 100})} className='casillaEliminar'><span style={{ cursor: 'pointer',fontSize:23 }} id={`${item.id}`} onClick={handleDelete} className='glyphicon glyphicon-trash'></span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <hr/>
      <strong style={({
              height: 20,
              backgroundColor: "#783838",
              padding: 10,
              borderRadius: 5,
              color: "white",
        })}>SUMA TOTAL: $ {
          conversion(localCarrito.reduce((sum, item) => 
          sum + (item.precio * item.cantidad), 0))
        }</strong>
    </div>
  }
  else  {
    return <div className="row">
      
      <span><h3>No hay articulos en el carrito...</h3></span>
    </div>
  }
}

function conversion(a){
  a=a.toString()
  return a.replace(new RegExp("^(\\d{" + (a.length%3?a.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim().replace(/\s/g, ','); 
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
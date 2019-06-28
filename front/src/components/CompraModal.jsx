import React from 'react';
import {Link} from 'react-router-dom'

export default ({ comprado, handleModal, handleCheckout,handleCompra, OC, total }) => {
  if(!comprado){
  return <div>
    <div className="modal-wrapper">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Orden de Compra</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={({color: 'black'})} className='casillaImg'>{OC.id}</td>
            <td style={({color: 'black'})} className='casillaTitulo'>${conversion(total)}</td>
          </tr>
        </tbody>
      </table>
    <button type="submit" onClick={handleModal} className="btn btn-default">Cancelar</button>
    <div onClick={handleCompra} id='registerSubmit' className='btn btn-default'>
      <span>Comprar</span>
    </div>
    </div>
    <br />
  </div>}
  else{
    return <div className="modal-wrapper">
    <h3>Su compra está siendo procesada... si dentro de las proximas 24hs no recibe una notificación comuníquese al XXXX</h3>
    <br/>
    <Link to ='/' ><button onClick={handleCheckout} type="submit" className="btn btn-default">OK!</button></Link>
    </div>
  }
}

function conversion(a){
  a=a.toString()
  return a.replace(new RegExp("^(\\d{" + (a.length%3?a.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim().replace(/\s/g, ','); 
}
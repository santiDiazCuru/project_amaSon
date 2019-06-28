import React from 'react';
import { Link } from 'react-router-dom'

export default ({ ListOC, changeSelect, changeBuscar, isLoggedIn, changeStatus, currentUser }) => {

    if (isLoggedIn) {

        return <div className='row'>
            Mis Ventas:&nbsp;
      <div class="input-group">

                <span class="input-group-addon">Busqueda por estado: </span>
                <select class="form-control" onChange={changeSelect}>
                    <option value="todos">Todos</option>
                    <option value="creado">Creado</option>
                    <option value="procesando">Procesando</option>
                    <option value="rechazado">Rechazado</option>
                    <option value="finalizado">Finalizado</option>

                </select>
                <span class="input-group-btn">
                    <button class="btn btn-default" onClick={changeBuscar} type="button">Buscar</button>
                </span>

            </div>

            <hr />
            <div className='panel panel-default'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Orden</th>
                            <th>Cantidad</th>
                            <th>Importe</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            {currentUser.isAdmin? <th>Cambiar Estado</th> : null}
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListOC && ListOC.map(item => {
                            return (
                                <tr key={item.OCId}>
                                    <td style={({ width: 100 })}>{item.OCId}</td>
                                    <td style={({ width: 100, fontSize: 16 })} className='casillaImporte'>{conversion(item.Cantidad)}</td>
                                    <td style={({ width: 100 })} className='casillaCantidad' className='cantidad'>$ {conversion(item.Importe)}</td>
                                    <td className='casillaTitulo' style={({ textTransform: "capitalize", fontSize: 16 })}>{item.Estado}</td>
                                    <td className='casillaTitulo' style={({ textTransform: "capitalize", fontSize: 16 })}>{fecha(item.createdAt)}</td>
                                    {currentUser.isAdmin ?
                                    <td className='casillaTitulo' style={({ textTransform: "capitalize", fontSize: 16 })}>
                                        <button onClick={changeStatus} id={item.OCId} name='procesando'>Procesando</button>
                                        <button onClick={changeStatus} id={item.OCId} name='rechazado'>Rechazado</button>
                                        <button onClick={changeStatus} id={item.OCId} name='finalizado'>Finalizado</button>
                                    </td> : null}
                                    <td>
                                        <Link to={`/details/compra/${item.OCId}`}>
                                            VER DETALLE
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    }
    else {
        return <div className="row">

            <span><h3>No se han encontrado ordenes de compras para tu usuario...</h3></span>
        </div>
    }
}

function conversion(a) {
    a = a.toString()
    return a.replace(new RegExp("^(\\d{" + (a.length % 3 ? a.length % 3 : 0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim().replace(/\s/g, ',');
}

function fecha(timeStr) {
    var intermediate = timeStr.split("T"),
        newStr = intermediate[0].split("-").join("/") + " " + intermediate[1].split(".")[0] + " GMT",
        newDate = new Date(newStr),
        newFormat = (newDate.getUTCDate() + "/" + (1 + newDate.getUTCMonth())) + "/" + newDate.getFullYear();
    return newFormat
}
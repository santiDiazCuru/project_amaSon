import React from 'react';
import { Link } from 'react-router-dom';

export default ({ listaCompras }) => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Orden de Compra</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Importe</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                        {/* <th>Opciones</th> */}
                    </tr>
                </thead>
                <tbody> {
                    listaCompras && listaCompras.map((compra)=>{
                        <tr key ={ compra.id}>
                        <td>{compra.productId}</td>
                        <td>{compra.cantidad}</td>
                        <td>{compra.importe}</td>
                        <td>{compra.estado}</td>
                        <td>{compra.fecha}</td>                                                   
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
};
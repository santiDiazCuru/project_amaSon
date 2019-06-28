import React from 'react';
import { Link } from 'react-router-dom'

export default ({ ListProductOC }) => {

    
        return <div className='row'>
            Detalle de orden de compra:&nbsp;
            
            <div className='panel panel-default'>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>IMG</th>
                            <th>Titulo</th>
                            <th>Precio</th>
                            
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListProductOC && ListProductOC.map(item => {
                            
                            return (
                                <tr key={item.product.id}>
                                    <td style={({ width: 100 })}>{item.product.id}</td>
                                    <td className='casillaImg' style={({width: 100})}>
                                    <img className='img img-thumbnail' width='60px' height='60px' src={`${item.product.img1}`}></img></td>
                                    <td className='casillaTitulo' style={({ textTransform: "capitalize", fontSize: 16 })}>{item.product.titulo}</td>
                                    <td style={({ width: 100, fontSize: 16 })} className='casillaImporte'>$ {conversion(item.product.precio)}</td>
                                    
                                    
                                    <td>
                                        <Link to={`/products/${item.product.id}`}>
                                            VER PRODUCTO
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

function conversion(a) {
    a = a.toString()
    return a.replace(new RegExp("^(\\d{" + (a.length % 3 ? a.length % 3 : 0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim().replace(/\s/g, ',');
}

function fecha(timeStr){
    var intermediate = timeStr.split("T"),
    newStr = intermediate[0].split("-").join("/") + " " + intermediate[1].split(".")[0] + " GMT",
    newDate = new Date(newStr),
    newFormat = (newDate.getUTCDate() + "/" + (1 + newDate.getUTCMonth())) + "/" + newDate.getFullYear();
    return newFormat
}
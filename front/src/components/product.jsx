import React from 'react'
import {style, styleImg, TitleStyle, starStyle, price} from '../estilos/styleProduct'
import { Link } from 'react-router-dom';

/*
RECIBE 2 PARAMETROS :
    col => representa la cantidad de columnas (boostrap) que necesita
    list => representa el arreglo de productos a renderizar:
        {
            id,
            titulo,
            img1,
            precio,
            valoracion
        }
*/        

export default ({ col, list }) => {
    return <div className="row">
        {
            // Itera el arreglo que se ingresa y construye cada productos
            list && list.map(item => (
                <div className={`col-xs-6 col-lg-${col}`}>  {/* col define el tamaño de las grillas */}
                    <div style={style}>
                        <img style={styleImg} src={item.img1} alt="{item.img1}" />
                        <center>
                            {/* Titulo */}
                            <h2 style={TitleStyle} key={item.id}>{item.titulo}</h2>
                        </center>&nbsp;
                    {/* construccion de las estrellas */}
                        <p style={starStyle}>
                            {/* CREA UN FOR DE LAS CANTIDAD DE ESTRELLAS COMPLETAS */}
                            {
                            function (cantidad) {
                                let rows = [];
                                for (let i = 0; i < cantidad; i++) {rows.push(<img src='completa.png' width="25px" />)}
                                return rows;
                            }(parseInt(item.valoracion))
                            }
                            {/* TERNARIO DE CONDICION SI ES MAYOR A 0.5 AGREGA LA MITAD DE LA ESTRELLA */}
                            {
                                ((item.valoracion-parseInt(item.valoracion))*10>=5)?
                                <img src='media.png' width="25px" />
                                :''
                            }
                            
                            {/* genera las cantidad de estellas vacias (5-valor) SI TIENE UNA MITAD LE RESTA 1*/}
                            {
                            function (cantidad) {
                                let rows = [];
                                for (let i = 0; i < cantidad; i++) {rows.push(<img src='vacia.png' width="25px" />)}
                                return rows;
                            }(
                                ((item.valoracion-parseInt(item.valoracion))*10>=5)?
                                 5-parseInt(item.valoracion)-1
                                :5-parseInt(item.valoracion)
                                
                            )
                            }
                            
                        </p>
                        <p>
                            <button className="btn btn-default" role="button">
                                <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                                Add Cart
                            </button>
                            
                            <span style={price}>
                             $ {item.precio}    
                            </span>
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
}
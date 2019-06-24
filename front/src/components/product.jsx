import React, { useState } from 'react';
import { style, styleImg, TitleStyle, starStyle, price, boton } from '../estilos/styleProduct'


export default ({ col, list, page, totalPage, nextPage }) => {

    if (list.length !== 0) {
        return <div className="row">
            {procesar(col, list)}                        
            {
                (list.length>=8) ? <center><br/>
                    {/* (page < totalPage) ? <center></center> */}                    
                    <button style={boton} className="btn btn-default btn-md" onClick={()=>nextPage(page + 1)}>
                        Ver mas..
                    </button>
                </center> : ''
            }
        </div>
    } else {
        return <div className="row">
            <span>No se ha encontrado ningun resultado..</span>
        </div>
    }

}

function procesar(col, listItems) {

    return listItems && listItems.map(item => (

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
                            for (let i = 0; i < cantidad; i++) { rows.push(<img src='http://localhost:8000/completa.png' width="25px" />) }
                            return rows;
                        }(parseInt(item.valoracion))
                    }
                    {/* TERNARIO DE CONDICION SI ES MAYOR A 0.5 AGREGA LA MITAD DE LA ESTRELLA */}
                    {
                        ((item.valoracion - parseInt(item.valoracion)) * 10 >= 5) ?
                            <img src='http://localhost:8000/media.png' width="25px" />
                            : ''
                    }

                    {/* genera las cantidad de estellas vacias (5-valor) SI TIENE UNA MITAD LE RESTA 1*/}
                    {
                        function (cantidad) {
                            let rows = [];
                            for (let i = 0; i < cantidad; i++) { rows.push(<img src='http://localhost:8000/vacia.png' width="25px" />) }
                            return rows;
                        }(
                            ((item.valoracion - parseInt(item.valoracion)) * 10 >= 5) ?
                                5 - parseInt(item.valoracion) - 1
                                : 5 - parseInt(item.valoracion)

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
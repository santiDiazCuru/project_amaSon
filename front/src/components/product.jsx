import React, { useState } from 'react';
import { style, styleImg, TitleStyle, starStyle, price, boton } from '../estilos/styleProduct'
import { Link } from 'react-router-dom';

export default ({ col, list, page, totalPage, nextPage, handleCarrito, currentUser, handleDelete, handleEditar, isLoggedIn, handleLocalCarrito }) => {

    if (list.length !== 0) {
        return <div >
            <div className="row">
                {list && list.map(item => (

                    <div className={`col-xs-6 col-lg-${col}`}>  {/* col define el tamaño de las grillas */}
                        <div className="divProduct">
                            <Link to={`/products/${item.id}`} >
                                <img style={styleImg} src={item.img1} alt="{item.img1}" />
                                <center>
                                    {/* Titulo */}
                                    <h2 style={TitleStyle} key={item.id}>{item.titulo}</h2>
                                </center>&nbsp;
                            </Link>
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
                            <p>{isLoggedIn ?
                                <button onClick={handleCarrito} name={item.id} className="btn btn-success" role="button">
                                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                                    Add Cart
                                </button>
                                :
                                <button onClick={handleLocalCarrito} name={item.id} className="btn btn-success" role="button">
                                    <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                                    Add Cart
                                </button>
                                }
                                <span style={price}>
                                    $ {item.precio}
                                </span>
                            </p>
                            {(currentUser.isAdmin) &&
                                <p>
                                    <button onClick={() => handleDelete(item.id)}
                                        className="btn btn-default" role="button">
                                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                        &nbsp; Eliminar&nbsp;&nbsp;
                                    </button>&nbsp;
                                    <Link to={`product/update/${item.id}`} 
                                    className="btn btn-default">
                                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                        &nbsp; Editar&nbsp;&nbsp;
                                    </Link>
                                </p>
                            }

                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                {
                    (list.length >= 8 && page < (Number(totalPage) / 8)) ? <center><br />
                        {/* (page < totalPage) ? <center></center> */}
                        <button style={boton} className="btn btn-default btn-md" onClick={() => nextPage(page + 1)}>
                            Cargar más..
                    </button>
                    </center> : ''
                }
            </div>
        </div>
    } else {
        return <div className="row">
            <span>No se ha encontrado ningun resultado..</span>
        </div>
    }
}

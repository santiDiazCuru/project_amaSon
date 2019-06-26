import React from 'react'
import { Link } from 'react-router-dom';
import { style, styleImg, TitleStyle, starStyle, price, boton } from '../estilos/styleProduct'
import product from './product';
const estilo = {
    minHeight: 200
}
const precio = {
    minHeight: 10,
    fontSize: 21,
    float: 'right',
    marginRight: 11,
    marginTop: 5
}

const style_form = {
    marginTop: 20,
    width: 440,
    height: 97
}

const boto = {
    float: 'left'
}

const rev_style = {
    marginTop: 60
}

const carrito = {
    marginTop: 40

}

export default ({ p, handleChange, handleSubmit }) => {
    console.log("SOY PRODUCTO WACHOOOOO", p)
    return (

        <div className="row">
            <br /><br />
            <div className="col-sm-3 col-md-2 sidebar" style={({ zIndex: 8 })}>
                {/* RENDERIZA COMPONENTE DE FILTRO */}

            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <div className="row">
                    <div className="col-md-4" style={({ zIndex: 8 })}>
                        {/* RENDERIZA COMPONENTE DE FILTRO */}
                        <img src={p.productito.img1} width='100%' alt="" />
                        <br />
                        <img src={p.productito.img1} width='33%' alt="" />
                        <img src={p.productito.img2} width='33%' alt="" />
                        <img src={p.productito.img3} width='33%' alt="" />
                        <button style={carrito} className="btn btn-default" role="button">
                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                        Add Cart
                    </button>
                    <h3 style={carrito}>Reviews</h3>


                    </div>
                    <div className="col-md-8">
                        <h3>{p.productito.titulo}</h3>
                        <h4>Descripcion del producto:</h4>
                        <h5 style={estilo}>{p.productito.descripcion}</h5>

                        <span style={precio}>
                            $ {p.productito.precio}
                        </span>

                        <p style={starStyle}>
                            {/* CREA UN FOR DE LAS CANTIDAD DE ESTRELLAS COMPLETAS */}
                            {
                                function (cantidad) {
                                    let rows = [];
                                    for (let i = 0; i < cantidad; i++) { rows.push(<img src='http://localhost:8000/completa.png' width="25px" />) }
                                    return rows;
                                }(parseInt(p.productito.valoracion))
                            }
                            {/* TERNARIO DE CONDICION SI ES MAYOR A 0.5 AGREGA LA MITAD DE LA ESTRELLA */}
                            {
                                ((p.productito.valoracion - parseInt(p.productito.valoracion)) * 10 >= 5) ?
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
                                    ((p.productito.valoracion - parseInt(p.productito.valoracion)) * 10 >= 5) ?
                                        5 - parseInt(p.productito.valoracion) - 1
                                        : 5 - parseInt(p.productito.valoracion)
                                )
                            }
                        </p>

                        <h4 style={rev_style}>Escriba su review de este producto</h4>
                        <form onSubmit={handleSubmit}>

                            <div class="form-group">
                                <label for="valoracion" class="col-sm-2 control-label">Valoracion:</label>
                                <div class="col-sm-4">
                                    <input onChange={handleChange} name="valoracion" type="number" min="1" max="5" class="form-control" />
                                </div>
                            </div>

                            <div class="form-group" width='100%' style={style_form}>
                                <label for='comentario' class="col-sm-2 control-label"></label>
                                <div class="col-sm-10">
                                    <textarea onChange={handleChange} name="comentario" placeholder="Escriba aqui su review..." style={style_form}></textarea>
                                </div>
                            </div>


                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-primary" style={boto}>Enviar</button>
                            </div>


                        </form>



                    </div>
                </div>


            </div>
        </div>

    )
}
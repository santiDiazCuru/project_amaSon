import React, { Component } from 'react';
import Producto from './product'

const style = {
    height: 334,
    border: "1px solid grey"
}

const imgStyle = {
    objectFit: 'contain'
}

export default (props) => (

    <div>
{/* esto es el carrousell */}
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Example headline.</h1>
                            <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" />
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>One more for good measure.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>



{/* esto es el banner */}

        <div className="row">
            <div className="col-lg-4" style={style}>
                <h2>Métodos de Pago</h2>
                <img className="img-thumbnail" style={imgStyle} src="https://bambae.com/themes/vmt/img/bambae/tarjetascredito.png" alt="Responsive image" />
                <p><a className="btn btn-primary" href="#" role="button">Mas detalles... &raquo;</a></p>
            </div>
            <div className="col-lg-4" style={style}>
                <h2>Te enviamos tu compra!</h2>
                <img className="img-thumbnail" style={imgStyle} src="https://mlstaticquic-a.akamaihd.net/autopartes-envios-D_NQ_NP_735102-MLU27856184841_072018-F.jpg" alt="Responsive image"/>
                <p><a className="btn btn-primary" href="#" role="button">Mas detalles... &raquo;</a></p>
            </div>
            <div className="col-lg-4" style={style}>
                <h2>Servicio Post Venta!</h2>

                <img className='img-thumbnail' style={imgStyle} src="https://brandslogo.net/wp-content/uploads/2018/03/social-network-logo-vector-200x200.png" alt="Responsive image" />
                <p><a className="btn btn-primary" href="#" role="button">Mas detalles... &raquo;</a></p>
            </div>
        </div>

        <Producto 
            col = {data.col}
            list = {data.list}
        />

    </div>

);

const data = {
    col: 3,
    list: [
        {
            id: 1,
            titulo: 'Lg Celular Lmx210rm Negro',
            img1: 'https://medias.musimundo.com/medias/sys_master/images/images/hfb/h70/10024006778910/00174028-174273-01.png',
            precio: 100.99,
            valoracion: 1
        },
        {
            id: 1,
            titulo: 'Celulares Liberados Motorola ',
            img1: 'https://medias.musimundo.com/medias/sys_master/images/images/h9b/h03/10024007368734/00174033-174278-01.png',
            precio: 100.99,
            valoracion: 2
        },
        {
            id: 1,
            titulo: 'Celular One Xt19415 Negro',
            img1: 'https://medias.musimundo.com/medias/sys_master/images/images/h08/h93/10023847788574/00157032-174150-01.png',
            precio: 100.99,
            valoracion: 1.5
        },
        {
            id: 1,
            titulo: 'Tcl Celular 5158a Negro',
            img1: 'https://medias.musimundo.com/medias/sys_master/images/images/h88/hcf/10030731231262/00181040-174527-01.png',
            precio: 100.99,
            valoracion: 3.5
        }
    ]
}

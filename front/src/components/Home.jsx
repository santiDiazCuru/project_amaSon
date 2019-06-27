import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const style = {
    backgroundColor: "#fff",
    border: "4px solid #E2E2E2",
    transition: "all 0.15s linear",
    maxHeight:200,
    minHeight:200,
    marginTop:-40,
}
const sombraRow = {
    boxShadow: "rgb(158, 158, 158) -2px -1px 25px 1px"
}
const imgStyle = {
    objectFit: 'contain',
    maxHeight:120,
    minHeight:120,
    maxWidth:"100%"
}

const categoryName =  {
    color: "#333",
    fontSize: 16,
    lineHeight: "initial",
    padding: "2px 0",
    textDecoration: "none"
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
                    <img className="first-slide" src="https://www.tailoy.com.pe/media/orbitslider/image/b/i/big-banner-tvs-60_-de-descuento.png" alt="First slide" />
                    <div className="container">
                    </div>
                </div>
                <div className="item">
                    <img className="second-slide" src="https://www.tailoy.com.pe/media/orbitslider/image/b/i/big-banner-televisores.png" alt="Second slide" />
                    <div className="container">
                    </div>
                </div>
                <div className="item">
                    <img className="third-slide" src="http://disttec.mx/wp-content/uploads/2017/03/Banner-Audio-Ambiental.jpg" alt="Third slide" />
                    <div className="container">
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
        <div className="container">
        <div className="row" style={sombraRow}>
            <div className="col-md-3" style={style}>
                <Link className="grid10-item action-box box-sm" gb-analytics="true" data-home-name="20190621_00a00_volvieronlascuotas" data-component-type="multi_grid_three_categories" data-element-title="Hornos y Cocina" data-home-idx="4" data-element-position="" data-device="desktop">
                    <div className="card">
                        <img style={imgStyle} className="block"
                        src="https://mottaplantillas.com/wp-content/uploads/2015/11/paypal.png" />
                        <div className="card-text category-info card-text--fixed-bottom">
                        <h3 style={categoryName}>Métodos de Pago</h3>
                        <span className="category-discount">Más detalles &raquo;</span>
                        </div>
                    </div>
                </Link> 
            </div>
            <div className="col-md-3" style={style}>
                <Link className="grid10-item action-box box-sm" gb-analytics="true" data-home-name="20190621_00a00_volvieronlascuotas" data-component-type="multi_grid_three_categories" data-element-title="Hornos y Cocina" data-home-idx="4" data-element-position="" data-device="desktop">
                    <div className="card">
                        <img style={imgStyle} className="block"
                        src="https://habitarvirtual.com.ar/pub/media/wysiwyg/envios-a-todos-el-pais.jpg" />
                        <div className="card-text category-info card-text--fixed-bottom">
                        <h3 style={categoryName}>Envios a domicilio</h3>
                        <span className="category-discount">Más detalles &raquo;</span>
                        </div>
                    </div>
                </Link> 
            </div>
            <div className="col-md-3" style={style}>
                <Link className="grid10-item action-box box-sm" gb-analytics="true" data-home-name="20190621_00a00_volvieronlascuotas" data-component-type="multi_grid_three_categories" data-element-title="Hornos y Cocina" data-home-idx="4" data-element-position="" data-device="desktop">
                    <div className="card">
                        <img style={imgStyle} className="block"
                        src="https://www.calidda.com.pe/atencion-al-cliente/Calidda/images/Servicios---Atencion-al-Cliente.jpg" />
                        <div className="card-text category-info card-text--fixed-bottom">
                        <h3 style={categoryName}>Atencion al Cliente 24hs</h3>
                        <span className="category-discount">Más detalles &raquo;</span>
                        </div>
                    </div>
                </Link> 
            </div>
            <div className="col-md-3" style={style}>
                <Link className="grid10-item action-box box-sm" gb-analytics="true" data-home-name="20190621_00a00_volvieronlascuotas" data-component-type="multi_grid_three_categories" data-element-title="Hornos y Cocina" data-home-idx="4" data-element-position="" data-device="desktop">
                    <div className="card">
                        <img style={imgStyle} className="block"
                        src="http://www.axosvisual.com/ImagenesBlog/ofertas.jpeg" />
                        <div className="card-text category-info card-text--fixed-bottom">
                        <h3 style={categoryName}>Ofertas Semanales</h3>
                        <span className="category-discount">Más detalles &raquo;</span>
                        </div>
                    </div>
                </Link> 
            </div>
            
        </div>
        <br />
        

        </div>
    </div>

);
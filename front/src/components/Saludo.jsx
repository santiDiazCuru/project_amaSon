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

export default () => (

        <div className="container-fluid">
            <div className="row">
                <br /><br />
                <div className="col-sm-3 col-md-2 sidebar" style={({ zIndex: 8 })}>
                    {/* RENDERIZA COMPONENTE DE FILTRO */}
                    <br/><img width="100%" src="https://www.elprogreso.es/media/elprogreso/images/2018/03/23/2018032307383441049.png" alt=""/>
                    <br/><hr/>
                    <img width="100%" src="https://www.foromarketing.com/wp-content/uploads/2017/11/Simplificar-el-proceso-de-compra-reto-para-el-ecommerce.png" alt=""/>
                </div>
                <div className="col-sm-5 col-sm-offset-3 col-md-6 col-md-offset-2 main">
                <h3>Muchas Gracias por su visita!</h3>
                <h4>&nbsp;&nbsp;AmaSon.. TU mejor amigo.</h4>
                <img src="https://1.bp.blogspot.com/-sDDcUxP4UmU/VwpVnWsGucI/AAAAAAAABmw/toEdr8Os0msFRmk8VyA68_vHmTnO9IoQw/s1600/Gracias1.png" alt=""/>
                <hr/>
                {/* esto es el banner */}
                <p>Recorda todos nuestros beneficios:</p>
                <hr/>
        <div className="container">
        <div className="row" style={sombraRow}>
            <div className="col-md-4" style={style}>
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
            <div className="col-md-4" style={style}>
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
            <div className="col-md-4" style={style}>
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
            
            
        </div>
        <br />
        

        </div>
            </div>
            </div>
        </div>
    );


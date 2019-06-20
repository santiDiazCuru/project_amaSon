import React from 'react'
import {Link} from 'react-router-dom' 
const style = {
    minHeight: 35,
    position: 'fixed',
    top: 45,
    zIndex: 500,
    width: "100%",
    backgroundColor: "#efefef",
    marginLeft: -14,
    borderBottom: "solid 1px #868686",
    borderTop: "solid 8px #ffffff"

}

const colorNav = {
    backgroundColor: "#efefef",
}

export default () => (
    <div>
        <nav className="navbar navbar-default" style={style}>
            <span className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={colorNav} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CATEGORIAS <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul>
                        <li><Link className="dropdown-item" to="/categoria/celulares">Celulares</Link></li>
                        <li><Link className="dropdown-item" to="/categoria/microondas">Microondas</Link></li>
                        <li><Link className="dropdown-item" to="/categoria/heladeras">Heladeras</Link></li>
                        <li><Link className="dropdown-item" to="/categoria/notebook">Notebook</Link></li>
                        <li><Link className="dropdown-item" to="/categoria/tablets">Tablets</Link></li>
                        <li><Link className="dropdown-item" to="/categoria/televisores">Televisores</Link></li>

                    </ul>
                </div>
            </span>
            <span className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={colorNav} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    OFERTAS <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul>

                        <li><Link className="dropdown-item" to="#">Ofertas del mes</Link></li>
                        <li><Link className="dropdown-item" to="#">Financiacion</Link></li>
                        <li><Link className="dropdown-item" to="#">Compra mas, paga menos!</Link></li>

                    </ul>
                </div>
            </span>
            <span className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={colorNav} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PROMOCIONES <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul>

                        <li><Link className="dropdown-item" to="#">Adquiri nuestra tarjeta</Link></li>
                        <li><Link className="dropdown-item" to="#">Suma puntos y gana premios!</Link></li>
                        <li><Link className="dropdown-item" to="#">Descuentos a jubilados</Link></li>

                    </ul>
                </div>
            </span>
        </nav>
    </div>
);

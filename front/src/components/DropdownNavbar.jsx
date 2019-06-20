import React from 'react'

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

                        <li><a className="dropdown-item" href="#">Entretenimiento</a></li>
                        <li><a className="dropdown-item" href="#">Vida Saludable</a></li>
                        <li><a className="dropdown-item" href="#">Deportes extremos</a></li>

                    </ul>
                </div>
            </span>
            <span className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={colorNav} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    OFERTAS <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul>

                        <li><a className="dropdown-item" href="#">Ofertas del mes</a></li>
                        <li><a className="dropdown-item" href="#">Financiacion</a></li>
                        <li><a className="dropdown-item" href="#">Compra mas, paga menos!</a></li>

                    </ul>
                </div>
            </span>
            <span className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={colorNav} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PROMOCIONES <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <ul>

                        <li><a className="dropdown-item" href="#">Adquiri nuestra tarjeta</a></li>
                        <li><a className="dropdown-item" href="#">Suma puntos y gana premios!</a></li>
                        <li><a className="dropdown-item" href="#">Descuentos a jubilados</a></li>

                    </ul>
                </div>
            </span>
        </nav>
    </div>
);

import React from 'react'

const style = {
    marginTop: -20,
    minHeight: 35
}




export default () => (
    <div>
        <nav className="navbar navbar-default" style={style}>
            <span className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CATEGORIAS
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
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    OFERTAS
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
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PROMOCIONES
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

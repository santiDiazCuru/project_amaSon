import React from 'react'
import { Link } from 'react-router-dom';

export default ({ show, tipo, mensaje, btnCerrar }) => {
    return <div>
        {/* {(state.response === 'error') && */}
        {(show) &&
            <>
                <div className="moodal" >

                    <div style={(
                        {
                            position: "fixed",
                            top: 70,
                            left: 0,
                            width: "100%",
                            zIndex: 99999,
                            padding: "5% 25% 52%",
                            backgroundColor: "rgba(137, 137, 137, 0.37)"
                        }
                    )}>
                        <div className={ `modal-wrapper -${tipo}`} style={({height: "31%", fontSize: 20})}>
                        <strong>Atencion!</strong>
                        {mensaje} <br/>
                        {(mensaje=='Se ha agregado el producto al carrito..')&&
                        <p>Si deseas finalizar o ver el detalle de tu carrito, por favor ingresa aqui
                            <Link to='/carrito' className="btn btn-md btn-default">
                            <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Carrito</Link>
                        </p> }
                        <br/>
                        <img src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_960_720.png" width="90px" />
                        <b></b>
                        <buttom className="btn btn-default" onClick={btnCerrar}>X - Cerrar</buttom>
                        </div>
                    </div>
                </div>

            </>
        }
        {/* } */}
    </div>
}
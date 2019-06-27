import React from 'react'

export default ({ show, tipo, mensaje, btnCerrar }) => {
    return <div>
        {/* {(state.response === 'error') && */}
        <div style={(
            {
                position: 'fixed',
                bottom: 0,
                right: 5
            }
        )}>
            {(show) &&
                <>
                    <buttom className="btn btn-default" onClick={btnCerrar}>X - Cerrar</buttom>
                        <br />
                    <div className={`alert alert-${tipo}`}>
                        {mensaje}
                    </div>
                </>
            }
        </div>
        {/* } */}
    </div>
}
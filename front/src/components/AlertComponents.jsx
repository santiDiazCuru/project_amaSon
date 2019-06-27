import React from 'react'

export default ({ show, tipo, mensaje, btnCerrar }) => {
    return <div>
        {/* {(state.response === 'error') && */}
        <div style={(
            {
            
                position: 'fixed',
                top: 100,
                right: '35%'
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
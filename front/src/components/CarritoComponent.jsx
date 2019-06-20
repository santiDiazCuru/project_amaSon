import React from 'react';
import { Link } from 'react-router-dom'

export default ({ handleCarrito }) => (
    <div>
        <div className="modal-wrapper" style={{
            transform: 'translateY(0vh)',
            opacity: '1'
        }}>
            <div className="modal-header">
                <h3>Carrito</h3>
                <span className="close-modal-btn" onClick={handleCarrito}>x</span>
            </div>
            <div className='modal-body'>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr",gridGap:"16px"}}>
                    <div style={{display:"block",padding:"20px",color:"white",background:"grey",boxShadow:"2px 2px 10px rgba(0,0,0,.25)"}}>
                        WOOOHOOOOOO
                    </div>
                    <div style={{display:"block",padding:"20px",color:"white",background:"grey",boxShadow:"2px 2px 10px rgba(0,0,0,.25)"}}>
                        WOoohooo
                    </div>
                </div>



            </div>
            <div className="modal-footer">
                <Link to='#' style={{ float: 'left' }}>Vaciar Carrito!</Link>
                <Link to='/compra'>Finalizar Compra!</Link>
            </div>
        </div>
    </div >
)
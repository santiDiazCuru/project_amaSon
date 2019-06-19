import React from 'react';
import { Link } from 'react-router-dom'

export default ({ handleModal }) => (
    <div>
        <div className="modal-wrapper" style={{
            transform: 'translateY(0vh)',
            opacity: '1'
        }}>
            <div className="modal-header">
                <h3>Log In</h3>
                <span className="close-modal-btn" onClick={handleModal}>x</span>
            </div>
            <div className='modal-body input-group'>
                <form >
                    <div className="input-group">
                        <input type="text" name='username' className="form-control" placeholder="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group">
                        <input type="email" name='email' className="form-control" placeholder="Email" aria-describedby="basic-addon2"></input>
                    </div>
                    <div className="input-group">
                        <input type="password" name='password' className="form-control" placeholder="Password" aria-describedby="basic-addon2"></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-default">Crer cuenta!</button>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <Link to='/register'>Registrarme</Link>
            </div>
        </div>
    </div>
)
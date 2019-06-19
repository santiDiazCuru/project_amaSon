import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}>
            <div className="modal-header">
                <h3>Log In</h3>
            </div>
            <div className='modal-body'>
            <form>
                <div class="input-group">
                    <input type="text" name='username' class="form-control" placeholder="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div class="input-group">
                    <input type="email" name='email' class="form-control" placeholder="Email" aria-describedby="basic-addon2"></input>
                </div>
                <div class="input-group">
                    <input type="password" name='password' class="form-control" placeholder="Password" aria-describedby="basic-addon2"></input>
                </div>
                <div>
                    <button type="submit" class="btn btn-default">Crer cuenta!</button>
                </div>
            </form>
            </div>
            <div className="modal-footer">
                <Link to='/register'>Registrarme</Link>
            </div>
        </div>
    </div>
)
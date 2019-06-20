import React from 'react';

export default ({ handleModal, handleRegister }) => (
    <div>
        <div className="modal-wrapper">
            <h2 id='LogInTitle'>Log In...</h2>
            <span className="close-modal-btn" onClick={handleModal}>x</span>
            <div>
                <form >
                    <input type="text" name='username' className="form-control" placeholder="Username" aria-describedby="basic-addon1"></input>
                    <br />
                    <input type="password" name='password' className="form-control" placeholder="Password" aria-describedby="basic-addon2"></input>
                    <br />
                    <button type="submit" className="btn btn-default">Ingresar</button>
                    <div onClick={handleRegister} id='registerSubmit' className='btn btn-default'>
                        <span>Registrarme</span>
                    </div>
                </form>
            </div>
            {/* <button type='submit' className="btn btn-default">Registrarme</button> */}
        </div>
    </div>
)
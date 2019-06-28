import React from 'react';

export default ({ error, handleModal, handleRegister, handleSubmit, handleChanges }) => (
    <div>
        <div className="modal-wrapper">
            <h2 id='LogInTitle'>Log In...</h2>
                { error ? <h5>El usuario o la contraseña son incorrectos</h5> : console.log('no hay error')}
            <span className="close-modal-btn" onClick={handleModal}>x</span>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChanges} type="email" name='email' className="form-control" placeholder="Email" aria-describedby="basic-addon1"></input>
                    <br />
                    <input onChange={handleChanges} type="password" name='password' className="form-control" placeholder="Password" aria-describedby="basic-addon2"></input>
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
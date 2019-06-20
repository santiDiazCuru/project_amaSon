import React from 'react';

export default ({handleRegister}) => (
    <div id='form-container' >
         <h2 id='LogInTitle'>Registrarse...</h2>
            <span onClick={handleRegister} className="close-modal-btn" >x</span>
        <form>
            <div>
                <div className='input-container'>
                <label htmlFor='username'>Usuario</label>
                <input name='username' type="text" className="form-control"></input>
                </div>
                <div>
                <label htmlFor='email'>Email</label>
                <input name='email' type="email" className="form-control" ></input>
                </div>
                <div>
                <label htmlFor='password'>Contraseña</label>
                <input name='password' type="password" className="form-control"></input>
                </div>
                
                <button type='submit'  id='btnRegister' className='btn btn-default'>Registrarme</button>
                
            </div>
        </form>
    </div>
)
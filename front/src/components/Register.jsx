import React from 'react';

export default () => (
    <div id='form-container' >
        <h2>Registrarse...</h2>
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
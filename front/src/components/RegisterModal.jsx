import React from 'react';

export default ({handleRegister, handleChanges, handleSubmit}) => (
    <div id='form-container' >
         <h2 id='LogInTitle'>Registrarse...</h2>
            <span onClick={handleRegister} className="close-modal-btn" >x</span>
        <form onSubmit={handleSubmit}>
            <div>
                <div className='input-container'>
                <label htmlFor='username'>Usuario</label>
                <input  onChange={handleChanges} name='username' type="text" className="form-control"></input>
                </div>
                <div>
                <label htmlFor='email'>Email</label>
                <input onChange={handleChanges} name='email' type="email" className="form-control" ></input>
                </div>
                <div>
                <label htmlFor='password'>Contraseña</label>
                <input onChange={handleChanges} name='password' type="password" className="form-control"></input>
                </div>
                
                <button type='submit'  id='btnRegister' className='btn btn-default'>Registrarme</button>
                
            </div>
        </form>
    </div>
)
import React from 'react';
import { Link } from 'react-router-dom'

export default ({}) => (
    <div className='row'>
        <br/>
        <br/>

    <div className='panel panel-default'>
    <table className="table table-striped">
           <thead>
             <tr>
               <th>#</th>
               <th>Producto</th>
               <th>Cantidad</th>
               <th>Importe</th>
               <th>Quitar</th>

             </tr>
           </thead>
           <tbody>
             <tr>
               <td className='casillaImg'>1</td>
               <td className='casillaTitulo'>Mark</td>
               <td className='casillaCantidad' className='cantidad'><input type='number'className='cantidad' min='1'/></td>
               <td className='casillaImporte'>@mdo</td>
               <td className='casillaEliminar'><span className='glyphicon glyphicon-trash'></span></td>

             </tr>
           </tbody>
         </table>
         </div>
         </div>
)

// <div>
// <div className="modal-wrapper">
//     <h2 id='LogInTitle'>Log In...</h2>
//         { error? <h5>El usuario o la contraseña son incorrectos</h5> : console.log('no hay error')}
//     <span className="close-modal-btn" onClick={handleModal}>x</span>
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input onChange={handleChanges} type="email" name='email' className="form-control" placeholder="Email" aria-describedby="basic-addon1"></input>
//             <br />
//             <input onChange={handleChanges} type="password" name='password' className="form-control" placeholder="Password" aria-describedby="basic-addon2"></input>
//             <br />
//             <button type="submit" className="btn btn-default">Ingresar</button>
//             <div onClick={handleRegister} id='registerSubmit' className='btn btn-default'>
//                 <span>Registrarme</span>
//             </div>
//         </form>
//     </div>
//     {/* <button type='submit' className="btn btn-default">Registrarme</button> */}
// </div>
// </div>
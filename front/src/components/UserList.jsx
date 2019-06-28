import React from 'react'
import { Link } from 'react-router-dom';

export default ({ list, handleAdmin, handleDelete, idActive, isLogin, status }) => {

  if(!isLogin && !status.hasOwnProperty('isAdmin')){
    return <span>
    Lo siento.. no tienes permiso de administrador o no estas logueado..
  </span>
  }

  return <table className="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>IsAdmin?</th>
        <th colSpan="2">Borrar</th>
      </tr>
    </thead>
    <tbody>{
      list && list.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
          
            <form>
            NO&nbsp;
              <label className="switch">
                {user.isAdmin ?
                  <input key={Math.random()} disabled={(idActive == user.id)?true:false}
                  id={user.id} onChange={handleAdmin} checked name={user.id} type="checkbox" />
                  :
                  <input key={Math.random()} id={user.id} name={user.id} type="checkbox" onChange={handleAdmin} />
                }
                

                <span className="slider round"></span>
              </label>&nbsp;SI
            </form>
          </td>
            <td>Borrar Usuario</td>
            <td className='casillaEliminar'>
              {(idActive !== user.id)?
              <span style={{ cursor: 'pointer',fontSize:23 }} 
              id={`${user.id}`} onClick={handleDelete} 
              className='glyphicon glyphicon-trash'></span>
              :
              <span style={{ cursor: 'no-drop',fontSize:23 }} 
              id={`${user.id}`}
              className='glyphicon glyphicon-remove-circle'></span>
              }

            </td>
        </tr>
      ))
    }
    </tbody>
  </table>
}




{/* <div className='row'>
list && list.map(user => (

)
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
       list && list.map(user => (
                        <tr>
                            <td>
                                {user.id}
                            </td>
                            <td>{user.username}</td>
                            <td>
                                {user.email}
       <th>Quitar</th> */}
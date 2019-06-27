import React from 'react'
import { Link } from 'react-router-dom';

export default ({ list, handleAdmin, handleDelete }) => {

  return <table className="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>IsAdmin?</th>
        <th>Borrar</th>
      </tr>
    </thead>
    <tbody>{
      list && list.map(user => (
        <tr key={user.id}>
          <td>ID {user.id}</td>
          <td>USERNAME: {user.username}</td>
          <td>Email: {user.email}</td>
          <td>Is Admin:
          
            <form>
              
              <label className="switch">
                {user.isAdmin ?
                  <input key={Math.random()} id={user.id} onChange={handleAdmin} checked name={user.id} type="checkbox" />
                  :
                  <input key={Math.random()} id={user.id} name={user.id} type="checkbox" onChange={handleAdmin} />
                }
                

                <span className="slider round"></span>
              </label>
            </form>
          </td>
            <td>Borrar Usuario</td>
            <td className='casillaEliminar'><span style={{ cursor: 'pointer' }} id={`${user.id}`} onClick={handleDelete} className='glyphicon glyphicon-trash'></span></td>
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
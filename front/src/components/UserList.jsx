import React from 'react'
import { Link } from 'react-router-dom';

export default ({ list }) => {
    console.log("SOY PROPS", list)
    return <table className="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>IsAdmin?</th>
      </tr>
    </thead>
    <tbody>{
    list && list.map(user => (
        <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.isAdmin? 'Admin' : 'No admin'}</td>
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
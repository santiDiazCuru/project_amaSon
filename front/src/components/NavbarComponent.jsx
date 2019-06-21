import React from 'react'
import { Link } from 'react-router-dom'
import {inputSearch, logo, formButton} from '../estilos/styleNav'
export default ({ handleChange, handleSubmit, handleModal, handleCarrito, inputValue }) => (
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-handleChangebar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to='/'>
                        <img src="/logo.png" width="104px" style={logo} />
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left" onSubmit={handleSubmit}>
                        <center>
                        <div className="input-group">
                            <span className="input-group-addon"></span>
                            <input style={inputSearch} type="text" className="form-control" 
                            placeholder="¿Qué estas buscando?"
                            value = {inputValue}
                            onChange={handleChange} />

                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-default">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </button>
                            </span>
                        </div>
                        </center>
                    </form>

                    <ul className="nav navbar-nav navbar-right">
                        {/* <li className="dropdown"> ESTO ES PARA EL USER COMÚN
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Mis Compras</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Cerrar Sesion</a></li>
                            </ul>
                        </li> */}

                        {/* ///// */}

                        {/* <li className="dropdown">  ESTO ES PARA EL ADMIN
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User Admin<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Mis Compras</a></li>
                                <li><a href="#">Usuarios</a></li>
                                <li><a href="#">Mis Ventas</a></li>
                                <li><a href="#">Crear Productos</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Cerrar Sesion</a></li>
                            </ul>
                        </li> */}
                    <li className="active">
                        <form className="navbar-form navbar-left" style={formButton}>
                            <div className="form-group">
                                <button type='submit' onClick={handleModal} 
                                className='btn btn-success btn-md'>
                                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                &nbsp;Log In
                                </button>
                            </div>
                        </form>
                        
                        <form className="navbar-form navbar-left" style={formButton}>
                            <div className="form-group">
                                <span onClick={handleCarrito} 
                                className='btn btn-default btn-md'>
                                <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                                &nbsp;Carrito
                                </span>
                            </div>
                        </form>
                            {/* <a className='glyphicon glyphicon-shopping-cart' onClick={handleCarrito}></a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

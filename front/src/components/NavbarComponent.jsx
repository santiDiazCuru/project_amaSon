import React from 'react'
import { Link } from 'react-router-dom'
import { inputSearch, logo, formButton } from '../estilos/styleNav'
export default ({ handleSession, currentUser, isLoggedIn, handleChange, handleSubmit, handleModal, handleCarrito, inputValue }) => (
    <div>
        <nav className="navbar navbar-default navbar-fixed-top"
        
        style={(currentUser.isAdmin)?({backgroundColor: "#f9ffbf"}):{}}
            >
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
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
                            <input autoComplete="off" id="inputS" type="text" className="form-control" 
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

                    <ul className="nav navbar-nav navbar-left">
                    <li className="active" id="login">
                                <form className="navbar-form navbar-left" style={formButton}>
                                {(currentUser.isAdmin)?(
                                        <>
                                        <img src="http://www.plataformaunimgro.com.mx/img/admin.png" height="35px" width= "50px"/>&nbsp;    
                                        <strong>PERFIL ADMIN</strong>
                                        </>
                                    ):''}
                                    
                                </form>
                            </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {/* <li className="dropdown">  ESTO ES PARA EL ADMIN
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User Admin<span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#">Mis Compras</Link></li>
                                <li><Link to="#">Usuarios</Link></li>
                                <li><Link to="#">Mis Ventas</Link></li>
                                <li><Link to="#">Crear Productos</Link></li>
                                <li role="separator" className="divider"></li>
                                <li><Link to="#">Cerrar Sesion</Link></li>
                            </ul>
                        </li> */}

                        {/* ESTO ES PARA EL USER COMÚN */}
                        
                        {/* este if hace que se renderize el boton de log in si el usuario no esta logeado y si está logeado un dropdown*/}
                        {isLoggedIn ?
                            <li className="dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Bienvenido! {currentUser.username}<span className="caret"></span></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/compras">Mis Compras</Link></li>
                                    {(currentUser.isAdmin)?(
                                        <>
                                            <li><Link to="/product/add">Crear Productos</Link></li>
                                            <li><Link to="/users">Lista de Usuarios</Link></li>
                                            <li><Link to="/ventas">Mis ventas</Link></li>
                                        </>
                                    ):''}
                                    <li role="separator" className="divider"></li>
                                    <li onClick={handleSession}><Link to='#' >Cerrar Sesion</Link></li>
                                </ul>
                            </li>

                            :

                            <li className="active" id="login">
                                <form className="navbar-form navbar-left" style={formButton}>
                                    <div className="form-group">
                                        <button type='submit' onClick={handleModal}
                                            className='btn btn-success btn-md'>
                                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                            &nbsp;Log In
                                </button>
                                    </div>
                                </form>
                            </li>
                        }
                        <li>
                            <form className="navbar-form navbar-left" style={formButton}>
                                <div className="form-group">
                                    <Link to='/carrito' ><span className='btn btn-default btn-md'>
                                        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                                        &nbsp;Carrito
                                </span></Link>
                                </div>
                            </form>
                            {/* <Link className='glyphicon glyphicon-shopping-cart' onClick={handleCarrito}></Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

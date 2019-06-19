import React from 'react'
import { Link } from 'react-router-dom'
export default ({ handleChange, handleSubmit, handleModal, handleCarrito }) => (
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
                    <Link className="navbar-brand" to='/'>amaSon</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
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
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <li className="active"><button type='submit' onClick={handleModal} className='btn btn-default btn-md'>Log In<span className="sr-only">(current)</span></button></li>
                            </div>
                        </form>
                        <li><a href="#" className='glyphicon glyphicon-shopping-cart' onClick={handleCarrito}></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

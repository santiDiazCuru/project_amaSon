import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Perfil extends React.Component {
    render(){

    return (
        <div className="container-fluid">
            <div className="row">
                <br /><br />
                <div className="col-sm-3 col-md-2 sidebar" style={({ zIndex: 8 })}>
                    {/* RENDERIZA COMPONENTE DE FILTRO */}
                    <br/><img width="100%" src="https://secure.webtoolhub.com/static/resources/icons/set108/26ce8716.png" alt=""/>
                    <br/><hr/>
                    <img width="100%" src="http://www.freelogovectors.net/wp-content/uploads/2013/02/administrator_woman2.png" alt=""/>
                </div>
                <div className="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-2 main">
                
                {(this.props.status.hasOwnProperty('isAdmin') && this.props.status.isAdmin)?
                <>
                    <h3>Bienvenido al perfil de administrador</h3>
                    <h4>¿Qué deseas hacer?</h4>

                    <div class="list-group">
                        <Link to='/users' class="list-group-item">
                            <h4 class="list-group-item-heading">
                            <img src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/users-512.png" width="60px" /> Usuarios:</h4>
                            <p class="list-group-item-text">
                                <p>
                                    Lista de Usuarios, editar perfiles, etc..</p>
                            </p>
                        </Link>
                        <Link to='/product/add' class="list-group-item">
                            <h4 class="list-group-item-heading">
                            <img src="https://image.flaticon.com/icons/png/512/1312/1312091.png" width="60px" /> Productos:</h4>
                            <p class="list-group-item-text">
                                <p>
                                    Desde esta sección podras dar de alta a nuevos productos que formarán parte del surtido..</p>
                            </p>
                        </Link>
                        <Link to='/ventas' class="list-group-item">
                            <h4 class="list-group-item-heading">
                            <img src="https://secureservercdn.net/166.62.112.199/mk4.41d.myftpupload.com/wp-content/uploads/2016/06/icons_club-300x282.png" width="60px" /> Mis Ventas:</h4>
                            <p class="list-group-item-text">
                                <p>
                                    Desde Aqui podrás ver el detalle de tus venta; gestionar los estados de cada ordenes de compra entre otras cosas...</p>
                            </p>
                        </Link>
                    </div>
                </>:
                <>
                <h3>Bienvenido {(this.props.status)&&this.props.status.userName}</h3>
                <h4>¿Qué deseas hacer?</h4>

                <div class="list-group">
                  
                    <Link to='/compras' class="list-group-item">
                        <h4 class="list-group-item-heading">
                        <img src="https://secureservercdn.net/166.62.112.199/mk4.41d.myftpupload.com/wp-content/uploads/2016/06/icons_club-300x282.png" width="60px" /> Mis Ventas:</h4>
                        <p class="list-group-item-text">
                            <p>
                                Desde Aqui podrás ver el detalle de tus compras, ordenes de compra y transacciones realizadas...</p>
                        </p>
                    </Link>
                </div>
            </>
            }

            </div>
            </div>
        </div>
    );

    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.user.currentUser,
    }
}



export default connect(
    mapStateToProps,
    null
)(Perfil)
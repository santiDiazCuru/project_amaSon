import React from 'react'
import { connect } from 'react-redux'
import CarritoComponent from '../components/CarritoComponent'
import { getCarrito, updateCantidad, deleteCompra, changeStatus } from '../action-creators/getCompras'
import { validateSession } from '../action-creators/logInUser'
import { vaciarCarrito, updateLocalCarrito, vaciarLocalCarrito, deleteLocalCarrito } from '../action-creators/addCarrito'

class CarritoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            carrito: [],
            eliminados: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmpty = this.handleEmpty.bind(this);

    };
    componentDidMount() {
        this.props.validateSession()
            .then(() => this.props.getCarrito(this.props.currentUser.id))
    }
    handleClick(e) {
        if (this.props.isLoggedIn) {
            e.preventDefault();
            changeStatus('finalizada', this.props.currentUser.id)
                .then(() => this.props.getCarrito(this.props.currentUser.id))
        }
        else alert('Debes estar loggeado para realizar una compra')
    }

    handleChange(e) {
        if (this.props.isLoggedIn) {
            e.preventDefault();
            updateCantidad(e.target.name, e.target.value, this.props.currentUser.id)
                .then(() => this.props.getCarrito(this.props.currentUser.id))
        }
        else {
            e.preventDefault();
            this.props.updateLocalCarrito(e.target.name, e.target.value)

        }
    }
    handleDelete(e) {
        if (this.props.isLoggedIn) {
            deleteCompra(e.target.id)
                .then(() => this.props.getCarrito(this.props.currentUser.id))
        }
        else {
            console.log(e.target.id)
            this.props.deleteLocalCarrito(e.target.id)
        }
    }
    handleEmpty(e) {
        if (this.props.isLoggedIn) {
            e.preventDefault();
            vaciarCarrito(this.props.currentUser.id)
                .then(() => this.props.getCarrito(this.props.currentUser.id))
        }
        else {
            this.props.vaciarLocalCarrito()
        }

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <br /><br />
                    <div className="col-sm-2 col-md-2 sidebar" style={({ zIndex: 8 })}>
                        {/* RENDERIZA COMPONENTE DE FILTRO */}
                        <br /><img width="100%" src="https://png.pngtree.com/png_detail/18/09/10/pngtree-design-of-online-shopping-payment-png-clipart_2099730.jpg" alt="" />
                        <br/><hr/>
                        <img width="100%" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160911629/62901362-compras-en-l%C3%ADnea-ecommerce-iconos-planos-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg" alt="" />
                    </div>
                    <div className="col-sm-10 col-sm-offset-10 col-md-10 col-md-offset-2 main">
                        <CarritoComponent
                            handleEmpty={this.handleEmpty}
                            handleClick={this.handleClick}
                            handleDelete={this.handleDelete}
                            handleChange={this.handleChange}
                            userCarrito={this.props.userCarrito}
                            isLoggedIn={this.props.isLoggedIn}
                            localCarrito={this.props.localCarrito} />
                    </div>
                </div>
            </div>
        );

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCarrito: (userId) => dispatch(getCarrito(userId)),
        validateSession: () => dispatch(validateSession()),
        vaciarLocalCarrito: () => dispatch(vaciarLocalCarrito()),
        deleteLocalCarrito: (productId) => dispatch(deleteLocalCarrito(productId)),
        updateLocalCarrito: (productId, newCantidad) => dispatch(updateLocalCarrito(productId, newCantidad))
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser,
        userOrdenes: state.compras.userOrdenes,
        userCarrito: state.compras.userCarrito,
        isLoggedIn: state.user.isLoggedIn,
        localCarrito: state.localCarrito.localCarrito,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer)
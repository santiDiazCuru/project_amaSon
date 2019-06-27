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
            <CarritoComponent
                handleEmpty={this.handleEmpty}
                handleClick={this.handleClick}
                handleDelete={this.handleDelete}
                handleChange={this.handleChange}
                userCarrito={this.props.userCarrito}
                isLoggedIn={this.props.isLoggedIn}
                localCarrito={this.props.localCarrito} />
        )
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
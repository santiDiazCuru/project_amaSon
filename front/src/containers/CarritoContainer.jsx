import React from 'react'
import { connect } from 'react-redux'
import CompraContainer from './CompraContainer'
import CarritoComponent from '../components/CarritoComponent'
import { getCarrito, updateCantidad, deleteCompra, changeStatus } from '../action-creators/getCompras'
import { validateSession } from '../action-creators/logInUser'
import { vaciarCarrito, updateLocalCarrito, vaciarLocalCarrito, deleteLocalCarrito } from '../action-creators/addCarrito'

class CarritoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            carrito: [],
            eliminados: [],
            showModal: false,
            total: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmpty = this.handleEmpty.bind(this);
        this.handleModal = this.handleModal.bind(this);
    };
    componentDidMount() {
        this.props.validateSession()
            .then(() => this.props.getCarrito(this.props.currentUser.id))
    }
    handleClick(e) {
        if (this.props.isLoggedIn) {
            e.preventDefault();
            this.handleModal()
            // changeStatus('carrito', this.props.currentUser.id)
            //     .then(() => this.props.getCarrito(this.props.currentUser.id))
        }
        else alert('Debes estar loggeado para realizar una compra')
    }
    handleModal(e) {
        if (e) e.preventDefault()
        !this.state.showModal ? this.setState({ showModal: true }) : this.setState({ showModal: false });
    };

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
        if (!this.state.showModal) {
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
        }
        else {
            {console.log('soy el user carrito que  le estoy pasando', this.props.userCarrito)}
            return (
                <div>
                    <CompraContainer handleModal={this.handleModal} userCarrito={this.props.userCarrito} />
                    <CarritoComponent
                        handleEmpty={this.handleEmpty}
                        handleClick={this.handleClick}
                        handleDelete={this.handleDelete}
                        handleChange={this.handleChange}
                        userCarrito={this.props.userCarrito}
                        isLoggedIn={this.props.isLoggedIn}
                        localCarrito={this.props.localCarrito} />
                </div>
            )
        }
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
import React from 'react'
import { connect } from 'react-redux'
import CarritoComponent from '../components/CarritoComponent'
import { getCarrito, updateCantidad, deleteCompra, changeStatus } from '../action-creators/getCompras'
import { validateSession } from '../action-creators/logInUser'
import {vaciarCarrito, addLocalCarrito, vaciarLocalCarrito, deleteLocalCarrito} from '../action-creators/addCarrito'

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
        .then(()=>this.props.getCarrito(this.props.currentUser.id))
    }
    handleClick(e){
        console.log('emtra al handler')
        if(this.props.isLoggedIn){
        e.preventDefault();
        changeStatus('finalizada', this.props.currentUser.id)
        .then(()=>this.props.getCarrito(this.props.currentUser.id))
        }
        else alert('Debes estar loggeado para realizar una compra')
    }

    handleChange(e){
        e.preventDefault();
        updateCantidad(e.target.name, e.target.value, this.props.currentUser.id)
        .then(()=>this.props.getCarrito(this.props.currentUser.id))
    }
    handleDelete(e){
        deleteCompra(e.target.id)
        .then(()=>this.props.getCarrito(this.props.currentUser.id))
    }
    handleEmpty(e){
        e.preventDefault();
        vaciarCarrito(this.props.currentUser.id)
        .then(()=>this.props.getCarrito(this.props.currentUser.id))
    }

    render() {
        return (
            <CarritoComponent handleEmpty={this.handleEmpty} handleClick={this.handleClick} handleDelete={this.handleDelete} handleChange={this.handleChange} userCarrito={this.props.userCarrito}/>
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getCarrito: (userId) => dispatch(getCarrito(userId)),
      validateSession: () => dispatch(validateSession())

    }
  }
const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser,
        userOrdenes: state.compras.userOrdenes,
        userCarrito: state.compras.userCarrito,
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer)
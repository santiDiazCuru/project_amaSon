import React from 'react'
import { connect } from 'react-redux'
import CarritoComponent from '../components/CarritoComponent'
import { getCarrito, updateCantidad, deleteCompra } from '../action-creators/getCompras'
import { validateSession } from '../action-creators/logInUser'

class CarritoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            carrito: [],
            eliminados: []
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    };
    componentDidMount() {
        this.props.validateSession()
        .then(()=>this.props.getCarrito(this.props.currentUser.id))
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

    render() {
        return (
            <CarritoComponent handleDelete={this.handleDelete} handleChange={this.handleChange} userCarrito={this.props.userCarrito}/>
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
        userCarrito: state.compras.userCarrito
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer)
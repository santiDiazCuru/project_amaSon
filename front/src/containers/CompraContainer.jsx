import React from 'react';
import { connect } from 'react-redux'
import CompraModal from '../components/CompraModal'
import { validateUser, validateSession } from '../action-creators/logInUser'
import {changeStatus, getOrdenCarrito } from '../action-creators/getCompras'

class CompraContainer extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            total: 0,
            comprado: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCompra = this.handleCompra.bind(this)
        this.handleCheckout = this.handleCheckout.bind(this)
    }
    componentDidMount(){
        let total = 0;
         for(let i = 0; i<this.props.userCarrito.length; i++){
                total = total + (this.props.userCarrito[i].cantidad * this.props.userCarrito[i].product.precio)
            }
        this.setState({total: total})
    }
    handleCompra(e){
        e.preventDefault();
        changeStatus('pendiente', this.props.currentUser.id)
        this.setState({comprado: true})
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.handleModal()
    }
    handleCheckout(e){
        this.props.handleModal() 
    }
    render() {
        console.log('hola soy OC', this.props.OC)
        return (
            <CompraModal 
            handleCancelar={this.handleCancelar}
            comprado={this.state.comprado}
            OC={this.props.OC} 
            total={this.state.total}
            handleSubmit={this.handleSubmit}
            handleModal={this.props.handleModal}
            handleCompra={this.handleCompra}
            handleCheckout={this.handleCheckout}
               />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrdenCarrito: (userId) => dispatch(getOrdenCarrito(userId)),
        validateSession: ()=> dispatch(validateSession())
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//         ownProps,
//         currentUser: state.user.currentUser,
//         OC: state.compras.ordenCarrito,

//     }
// }

export default connect(null, mapDispatchToProps)(CompraContainer)

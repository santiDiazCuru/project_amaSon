import React from 'react';
import { connect } from 'react-redux'
import CompraModal from '../components/CompraModal'
import { validateUser } from '../action-creators/logInUser'
import {changeStatus } from '../action-creators/getCompras'

export default class CompraContainer extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            total: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        let total = 0;
         for(let i = 0; i<this.props.userCarrito.length; i++){
             console.log(this.props.userCarrito[i].cantidad, this.props.userCarrito[i].product.precio)
                total = total + (this.props.userCarrito[i].cantidad * this.props.userCarrito[i].product.precio)
            }
        this.setState({total: total},()=>console.log(this.state, this.props.userCarrito))
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleModal()
    }

    render() {
        return (
            <CompraModal total={this.state.total} handleSubmit={this.handleSubmit} handleModal={this.props.handleModal} />
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
    
//     }
// }

//export default connect(null, mapDispatchToProps)(LogInContainer)
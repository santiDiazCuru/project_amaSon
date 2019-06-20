import React from 'react'
import {connect} from 'react-redux'
import CarritoComponent from '../components/CarritoComponent'

class CarritoContainer extends React.Component {
    constructor() {
        super();
    };


    render() {
        return (
            <CarritoComponent handleCarrito={this.props.handleCarrito}/>
        )
    };
};


export default connect ()(CarritoContainer)
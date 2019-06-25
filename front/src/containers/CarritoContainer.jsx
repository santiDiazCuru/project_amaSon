import React from 'react'
import {connect} from 'react-redux'
import CarritoComponent from '../components/CarritoComponent'

class CarritoContainer extends React.Component {
    constructor() {
        super();
    };


    render() {
        return (
            <CarritoComponent/>
        )
    };
};


export default connect ()(CarritoContainer)
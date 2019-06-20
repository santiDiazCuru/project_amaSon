import React from 'react';
import { connect } from 'react-redux';
import RegisterModal from '../components/RegisterModal'

export default class RegisterContainer extends React.Component{
    constructor(props){
        super(props)
    }




    render() {
        return (
            <div>
            <RegisterModal handleRegister={this.props.handleRegister} />
            </div>
        )
    }
}

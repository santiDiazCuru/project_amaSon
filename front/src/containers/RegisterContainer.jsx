import React from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register'

export default class RegisterContainer extends React.Component{
    constructor(props){
        super(props)
    }




    render() {
        return (
            <div>
            <Register />
            </div>
        )
    }
}

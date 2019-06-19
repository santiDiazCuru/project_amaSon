import React from 'react';
import { connect } from 'react-redux'
import LogInModal from '../components/LogInModal'

 export default class LogInContainer extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        console.log(this.props)
        e.preventDefault();
        this.props.handleModal(e);
        this.props.history.push('/register')
    }

    render(){
         return (
             <LogInModal handleModal={this.props.handleModal} handleClick={this.handleClick}/>
         )
    }
}
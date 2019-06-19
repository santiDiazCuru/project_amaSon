import React from 'react';
import { connect } from 'react-redux'
import LogInModal from '../components/LogInModal'

 export default class LogInContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
         return (
             <LogInModal handleModal={this.props.handleModal}/>
         )
    }
}
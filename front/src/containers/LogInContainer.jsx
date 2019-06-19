import React from 'react';
import { connect } from 'react-redux'
import LogInButton from '../components/LogInButton'

class LogInContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
        this.handleModal = this.handleModal.bind(this)
    }

    handleModal(){
         if(!this.state.showModal) this.setState({showModal: true});
         if(this.state.showModal) this.setState({showModal: false})
    }

    render(){
        return(
            <LogInButton handleModal={this.handleModal}/>
        )
    }
}
import React from 'react';
import { connect } from 'react-redux'
import LogInModal from '../components/LogInModal'
import { validateUser } from '../action-creators/logInUser'

class LogInContainer extends React.Component {
    constructor(props) {
        super(props),
            this.state = { //maneja los inputsss!
                username: '',
                password: ''
            }
        this.handleChanges = this.handleChanges.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChanges(e) {
        e.preventDefault()
        if (e.target.name === 'username') this.setState({ username: e.target.value })
        if (e.target.name === 'password') this.setState({ password: e.target.value })
        console.log(this.state)
    }
    handleSubmit(e) {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        e.preventDefault()
        this.state.username &&  this.state.password && this.props.validateUser(user) && this.props.handleModal()
    }
    //handleModal viene por props y es para cerrar el modal. handleRegister es para abrir o cerrar el registerModal

    render() {
        return (
            <LogInModal handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} handleModal={this.props.handleModal} handleRegister={this.props.handleRegister} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateUser: (user) => dispatch(validateUser(user))
    }
}

export default connect(null, mapDispatchToProps)(LogInContainer)
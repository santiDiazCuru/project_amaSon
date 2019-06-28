import React from 'react';
import { connect } from 'react-redux';
import RegisterModal from '../components/RegisterModal'
import { registerUser } from '../action-creators/registerUser'
import { validateUser } from '../action-creators/logInUser'

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props),
            this.state = { //maneja los inputsss!
                username: '',
                email: '',
                password: ''
            }
        this.handleChanges = this.handleChanges.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChanges(e) {
        e.preventDefault()
        if (e.target.name === 'username') this.setState({ username: e.target.value })
        if (e.target.name === 'email') this.setState({ email: e.target.value })
        if (e.target.name === 'password') this.setState({ password: e.target.value })
    }
    handleSubmit(e) {
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        e.preventDefault()
        this.state.username && this.state.email && this.state.password && this.props.registerUser(newUser)
            .then((X) => {
                if (X) {
                    alert('El email ingresado ya existe')
                }
                else {
                    const user = {
                        email: this.state.email,
                        password: this.state.password
                    }
                    this.props.validateUser(user)
                    this.props.handleRegister()
                    
                }
            })
    }
    //la funcion handleRegister llega desde navBar container como props y hace que se cierre el 
    //modal si esta abierto y que se abra si esta cerrado!!!!

    render() {
        return (
            <div>
                <RegisterModal handleSubmit={this.handleSubmit} handleRegister={this.props.handleRegister} handleChanges={this.handleChanges} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (newUser) => dispatch(registerUser(newUser)),
        validateUser: (user) => dispatch(validateUser(user))
    }
}
export default connect(null, mapDispatchToProps)(RegisterContainer)
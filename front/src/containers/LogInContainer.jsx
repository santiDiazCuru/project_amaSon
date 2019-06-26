
import React from 'react';
import { connect } from 'react-redux'
import LogInModal from '../components/LogInModal'
import { validateUser } from '../action-creators/logInUser'

class LogInContainer extends React.Component {
    constructor(props) {
        super(props),
            this.state = { //maneja los inputsss!
                email: '',
                password: '',
                error: false
            }
        this.handleChanges = this.handleChanges.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        if (this.state.error){
            this.props.handleSubmit()
        }
    }

    handleChanges(e) {
        e.preventDefault()
        if (e.target.name === 'email') this.setState({ email: e.target.value })
        if (e.target.name === 'password') this.setState({ password: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.validateUser(user)
        .catch(()=>this.setState({error: true})) 
        this.props.handleModal()
    }

    //handleModal viene por props y es para cerrar el modal. handleRegister es para abrir o cerrar el registerModal

    render() {
        return (
            <LogInModal error={this.state.error} handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} handleModal={this.props.handleModal} handleRegister={this.props.handleRegister} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateUser: (user) => dispatch(validateUser(user))
    }
}

export default connect(null, mapDispatchToProps)(LogInContainer)
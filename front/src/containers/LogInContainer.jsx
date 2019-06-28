import React from 'react';
import { connect } from 'react-redux'
import LogInModal from '../components/LogInModal'
import { validateUser } from '../action-creators/logInUser'
import { withRouter } from "react-router-dom";


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
    componentDidMount() {
        if (this.state.error) {
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
            .then(() => {
                if (this.props.isLoggedIn) {
                    this.props.handleModal()
                    this.props.history.push("/admin");
                }
            })
            .catch(() => {
                this.setState({ error: true })
            })

    }

    //handleModal viene por props y es para cerrar el modal. handleRegister es para abrir o cerrar el registerModal

    render() {
        return (
            <LogInModal error={this.state.error} handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} handleModal={this.props.handleModal} handleRegister={this.props.handleRegister} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateUser: (user) => dispatch(validateUser(user))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInContainer));
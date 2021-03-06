import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import { fetchProducts } from '../action-creators/getProducts'
import { endSession } from '../action-creators/logInUser'
import LogInContainer from './LogInContainer'
import CarritoContainer from './CarritoContainer';
import DropdownNavbar from '../components/DropdownNavbar'
import RegisterContainer from './RegisterContainer';

class NavBarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            showLogInModal: false,
            showCarrito: false,
            showRegister: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleSession = this.handleSession.bind(this);

    };
    handleModal(e) {
        if (e) e.preventDefault()
        !this.state.showLogInModal ? this.setState({ showLogInModal: true }) : this.setState({ showLogInModal: false });
    };

    handleSession(e) {
        e.preventDefault()
        this.props.endSession()
        this.props.history.push('/logout')
        window.localStorage.clear()
    }

    handleChange(e) {
        e.preventDefault();
        //this.props.history.push('/search')
        let inputValue = e.target.value
        this.setState({ inputValue }, 
            () => 
             this.state.inputValue //&&
             //this.props.fetchProducts(this.state.inputValue,'',0,1000000,1)
             )
        
    };
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/search')
        this.state.inputValue && this.props.fetchProducts(this.state.inputValue,'',0,1000000,1)
        console.log("enter")
        this.setState({
            inputValue: ''
        })
    };
    handleRegister(e) {
        if (e) e.preventDefault()
        !this.state.showRegister ? this.setState({ showRegister: true }) : this.setState({ showRegister: false })
        if (this.state.showLogInModal) {
            this.setState({ showLogInModal: false })   
        }
    }

    render() {
        if (this.state.showLogInModal) {
            return (
                <div>
                    <NavbarComponent
                        inputValue={this.state.inputValue}
                        handleSession={this.handleSession}
                        currentUser={this.props.currentUser}
                        isLoggedIn={this.props.isLoggedIn}
                        handleChange={this.handleChange}
                        handleModal={this.handleModal}
                        handleSubmit={this.handleSubmit} />
                    <DropdownNavbar />
                    <LogInContainer handleModal={this.handleModal} handleRegister={this.handleRegister} />
                </div>
            )
        } if (this.state.showRegister) {
            return (
                <div>
                    <NavbarComponent
                        inputValue={this.state.inputValue}
                        handleSession={this.handleSession}
                        currentUser={this.props.currentUser}
                        isLoggedIn={this.props.isLoggedIn}
                        handleChange={this.handleChange}
                        handleModal={this.handleModal}
                        handleSubmit={this.handleSubmit} />
                    <DropdownNavbar />
                    <RegisterContainer handleRegister={this.handleRegister} />
                </div>
            )

        }
        return (
            <div>
                <NavbarComponent
                    inputValue={this.state.inputValue}
                    handleSession={this.handleSession}
                    currentUser={this.props.currentUser}
                    isLoggedIn={this.props.isLoggedIn}
                    handleChange={this.handleChange}
                    handleModal={this.handleModal}
                    handleSubmit={this.handleSubmit}
                    handleCarrito={this.handleCarrito} />
                <DropdownNavbar />
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input,category, min,max,page) => dispatch(fetchProducts(input,category, min,max,page)),
    endSession: () => dispatch(endSession()),
});
const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser,
        isLoggedIn: state.user.isLoggedIn,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)

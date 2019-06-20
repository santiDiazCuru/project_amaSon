import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import { fetchProducts } from '../action-creators/getProducts'
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
        this.handleCarrito = this.handleCarrito.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

    };
    handleModal(e) {
        if(e) e.preventDefault()
        !this.state.showLogInModal ? this.setState({ showLogInModal: true }) : this.setState({ showLogInModal: false });
    };

    handleCarrito(e) {
        e.preventDefault();
        !this.state.showCarrito ? this.setState({ showCarrito: true }) : this.setState({ showCarrito: false });
    }

    handleChange(e) {
        e.preventDefault();
        this.props.history.push('/search')
        let inputValue = e.target.value
        this.setState({ inputValue }, () => this.state.inputValue && this.props.fetchProducts(this.state.inputValue));
    };
    handleSubmit(e) {
        e.preventDefault();
        this.state.inputValue && fetchProducts(this.state.inputValue)
    };
    handleRegister(e){
        if (e) e.preventDefault()
        !this.state.showRegister ? this.setState({ showRegister: true }) : this.setState({ showRegister: false })
        if (this.state.showLogInModal) this.setState({ showLogInModal: false })
    }

    render() {
        if (this.state.showLogInModal) {
            return (
                <div>
                    <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} handleSubmit={this.handleSubmit}/>
                    <DropdownNavbar />
                    <LogInContainer handleModal={this.handleModal} handleRegister={this.handleRegister}/>
                </div>
            )
            
        } else if (this.state.showCarrito){
            return (
                <div>
                    <NavbarComponent handleChange={this.handleChange} handleCarrito={this.handleCarrito} handleSubmit={this.handleSubmit}/>
                    <DropdownNavbar />
                    <CarritoContainer handleCarrito={this.handleCarrito}/>
                </div>
            )
        } if (this.state.showRegister) {
            return (
                <div>
                    <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} handleSubmit={this.handleSubmit}/>
                    <DropdownNavbar />
                    <RegisterContainer handleRegister={this.handleRegister} />
                </div>
            )
            
        }
        return (
            <div>
            <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} handleSubmit={this.handleSubmit} handleCarrito={this.handleCarrito} />
            <DropdownNavbar />
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input) => dispatch(fetchProducts(input))
});

export default connect(null, mapDispatchToProps)(NavBarContainer)

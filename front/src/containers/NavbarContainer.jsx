import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import { fetchProducts } from '../action-creators/getProducts'
import LogInContainer from './LogInContainer'
import CarritoContainer from './CarritoContainer';


class NavBarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            showLogInModal: false,
            showCarrito: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCarrito = this.handleCarrito.bind(this);
    };
    handleModal() {
        if (!this.state.showLogInModal) this.setState({ showLogInModal: true })
        if (this.state.showLogInModal) this.setState({ showLogInModal: false })
    };

    handleCarrito() {
        if (!this.state.showCarrito) this.setState({ showCarrito: true })
        if (this.state.showCarrito) this.setState({ showCarrito: false })
    }

    handleChange(e) {
        e.preventDefault();
        let inputValue = e.target.value
        this.setState({ inputValue }, () => this.state.inputValue && fetchProducts(this.state.inputValue));
    };

    handleSubmit(e) {
        e.preventDefault();
        this.state.inputValue && fetchProducts(this.state.inputValue)
    };

    render() {
        if (this.state.showLogInModal) {
            return (
                <div>
                    <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} handleSubmit={this.handleSubmit}/>
                    <LogInContainer handleModal={this.handleModal} />
                </div>
            )
        } else if (this.state.showCarrito){
            return (
                <div>
                    <NavbarComponent handleChange={this.handleChange} handleCarrito={this.handleCarrito} handleSubmit={this.handleSubmit}/>
                    <CarritoContainer handleCarrito={this.handleCarrito}/>
                </div>
            )
        }
            return (
                <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} handleSubmit={this.handleSubmit} handleCarrito={this.handleCarrito}/>
            );
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input) => dispatch(fetchProducts(input))
});

export default connect(null, mapDispatchToProps)(NavBarContainer)
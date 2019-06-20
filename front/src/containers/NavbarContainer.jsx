import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import { fetchProducts } from '../action-creators/getProducts'
import LogInContainer from './LogInContainer'
import CarritoContainer from './CarritoContainer';
import DropdownNavbar from '../components/DropdownNavbar'


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
    handleModal(e) {
        e.preventDefault();
        !this.state.showLogInModal ? this.setState({ showLogInModal: true }) : this.setState({ showLogInModal: false });
    };

    handleCarrito(e) {
        e.preventDefault();
        !this.state.showCarrito ? this.setState({ showCarrito: true }) : this.setState({ showCarrito: false });
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
        return (<>
            <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} handleSubmit={this.handleSubmit} handleCarrito={this.handleCarrito}/> &&
            <DropdownNavbar />
            {this.state.showLogInModal && <LogInContainer handleModal={this.handleModal} /> || this.state.showCarrito && <CarritoContainer handleCarrito={this.handleCarrito} />}
        </>);
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input) => dispatch(fetchProducts(input))
});

export default connect(null, mapDispatchToProps)(NavBarContainer)

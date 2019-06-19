import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import { fetchProducts } from '../action-creators/getProducts'

class NavBarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

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
        return (
            <NavbarComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input) => dispatch(fetchProducts(input))
});

export default connect(null, mapDispatchToProps)(NavBarContainer)
import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import DropdownNavbar from '../components/DropdownNavbar'
import {fetchProducts} from '../action-creators/getProducts'

class NavBarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(e) {
        e.preventDefault();
        let inputValue = e.target.value
        this.setState({ inputValue }, ()=> fetchProducts(this.state.inputValue));
    };


    render() {
        return (
            <div>

            <NavbarComponent handleChange={this.handleChange} />
            <DropdownNavbar />

            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input) => dispatch(fetchProducts(input))
 });
 
 export default connect(null, mapDispatchToProps)(NavBarContainer)
import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import LogInContainer from './LogInContainer'
import {fetchProducts} from '../action-creators/getProducts'

class NavBarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            showLogInModal: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleModal = this.handleModal.bind(this)
    };
    handleModal(){
        if (!this.state.showLogInModal) this.setState({showLogInModal: true})
        if (this.state.showLogInModal) this.setState({showLogInModal: false})
    }

    handleChange(e) {
        e.preventDefault();
        let inputValue = e.target.value
        this.setState({ inputValue }, ()=> fetchProducts(this.state.inputValue));
    };

    render() {
        if(this.state.showLogInModal){
            return (
                <div>
                <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} />
                <LogInContainer handleModal={this.handleModal}/>
                </div>
            )
        }
        return (
            <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} />
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input) => dispatch(fetchProducts(input))
 });
 
 export default connect(null, mapDispatchToProps)(NavBarContainer)
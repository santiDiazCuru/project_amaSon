import React from 'react'
import { connect } from 'react-redux'
import NavbarComponent from '../components/NavbarComponent'
import { fetchProducts } from '../action-creators/getProducts'
import LogInContainer from './LogInContainer'
import DropdownNavbar from '../components/DropdownNavbar'


class NavBarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            showLogInModal: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleModal = this.handleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleModal(e){
        e.preventDefault()          
        if (!this.state.showLogInModal) this.setState({showLogInModal: true})
        if (this.state.showLogInModal) this.setState({showLogInModal: false})
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
        if(this.state.showLogInModal){
            return (
                <div>
                <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} />
                <LogInContainer handleModal={this.handleModal}/>
                </div>
            )
        }
        return (
            <div>
            <NavbarComponent handleChange={this.handleChange} handleModal={this.handleModal} handleSubmit={this.handleSubmit} />
            <DropdownNavbar />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: (input) => dispatch(fetchProducts(input))
});

export default connect(null, mapDispatchToProps)(NavBarContainer)

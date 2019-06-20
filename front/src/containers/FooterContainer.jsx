import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from '../components/Footer';

class FooterContainer extends Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Footer />
        );
    }
}

export default connect()(FooterContainer);
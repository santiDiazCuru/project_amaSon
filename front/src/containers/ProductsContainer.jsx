import React from 'react';
import { connect } from 'react-redux';
import ProductsComponent from '../components/ProductsComponent';

class ProductsContainer extends React.Component {
    constructor(){
        super();

    };

    render() {
        return (
              <ProductsComponent/>  
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer)
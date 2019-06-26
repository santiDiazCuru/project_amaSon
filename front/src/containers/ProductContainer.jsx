import React, { Component } from 'react';
import { connect } from 'react-redux';
import Producto from '../components/product';
import { fetchProducts } from '../action-creators/getProducts'

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this)
    };
    
    nextPage(page) {
        this.props.fetchProducts(this.props.inputValue,
            this.props.categoryParams,
            this.props.min, this.props.max, page)
    }

    render() {
        return (
            <Producto
                col={3}
                page={this.props.page}
                totalPage={this.props.totalPages}
                list={this.props.listaProductos}
                nextPage={this.nextPage}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        listaProductos: state.product.productos,
        page: state.product.page,
        totalPages: state.product.totalPages,
        categoryParams: state.product.filterCategory,        
        inputValue: state.product.inputValue,
        min:state.product.filterPriceMin,
        max:state.product.filterPriceMax,
        listCategory: state.product.listCategory,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (input, category, min, max, page) => dispatch(fetchProducts(input, category, min, max, page)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Producto from '../components/product';
import { fetchProducts } from '../action-creators/getProducts'
import { validateSession } from '../action-creators/logInUser'
import { addItem } from '../action-creators/addCarrito'


class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this)
        this.handleCarrito = this.handleCarrito.bind(this)
    };
    componentDidMount(){
        this.props.validateSession()
    }

    nextPage(page) {
        this.props.fetchProducts(this.props.inputValue,
            this.props.categoryParams,
            this.props.min, this.props.max, page)
    }
    handleCarrito(e){
        this.props.isLoggedIn? addItem(e.target.name, this.props.currentUser.id) : alert('el usuario no esta loggeado y hay que hacer que se guarde en local storage perritoou')
    }

    render() {
        return (
            <Producto
                col={3}
                page={this.props.page}
                totalPage={this.props.totalPages}
                list={this.props.listaProductos}
                nextPage={this.nextPage}
                handleCarrito={this.handleCarrito}
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
        currentUser: state.user.currentUser,
        isLoggedIn: state.user.isLoggedIn
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (input, category, min, max, page) => dispatch(fetchProducts(input, category, min, max, page)),
        validateSession: () => dispatch(validateSession())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer)
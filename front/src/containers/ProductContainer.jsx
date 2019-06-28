import React, { Component } from 'react';
import { connect } from 'react-redux';
import Producto from '../components/product';
import Alert from '../components/AlertComponents'
import { validateSession } from '../action-creators/logInUser'
import { addItem } from '../action-creators/addCarrito'
import { fetchProducts, deleteProduct, alertBottom } from '../action-creators/getProducts'

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false
        }
        this.nextPage = this.nextPage.bind(this)
        this.handleEditar = this.handleEditar.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.btnCerrar = this.btnCerrar.bind(this)
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
    handleDelete(id) {
        this.props.deleteProduct(id)
        .then((data)=>{
            //console.log(data,"DATAA")
            this.props.alertBottom('success','Se ha eliminado correctamente..')
            this.setState({
                show:true
            })
        })
    }
    btnCerrar(){
        this.setState({
            show:false
        })
    }
    handleEditar(id) {
        console.log(id, "UPDATE")
    }
    handleCarrito(e){
        this.props.isLoggedIn? 
        addItem(e.target.name, this.props.currentUser.id) : 
        alert('el usuario no esta loggeado y hay que hacer que se guarde en local storage perritoou')
    }

    render() {
        // if(this.props.listaProductos[0]){
        // console.log(this.props.listaProductos[0].precio,'carloooos')
        // }
        // console.log(this.props.priceMin,'aaaaaaaaa')
        // console.log(this.props.priceMax,'bbbbbbbbb')
        return (
            <>
            <Producto
                col={3}
                page={this.props.page}
                totalPage={this.props.totalPages}
                list={this.props.listaProductos}
                nextPage={this.nextPage}
                handleCarrito={this.handleCarrito}
                currentUser={this.props.currentUser}
                handleDelete={this.handleDelete}
                handleEditar={this.handleEditar}
                priceMin={this.props.priceMin}
                priceMax={this.props.priceMax}
            />
            <Alert 
                show={this.state.show}
                btnCerrar={this.btnCerrar}
                tipo = {this.props.tipo}
                mensaje = {this.props.mensaje}
            />
            </>
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
        min: state.product.filterPriceMin,
        max: state.product.filterPriceMax,
        listCategory: state.product.listCategory,
        currentUser: state.user.currentUser,
        isLoggedIn: state.user.isLoggedIn,
        tipo:state.alert.tipo,
        mensaje:state.alert.mensaje,
        priceMin: state.price.priceMin,
        priceMax: state.price.priceMax
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (input, category, min, max, page) => dispatch(fetchProducts(input, category, min, max, page)),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        alertBottom:(tipo,mensaje)=> dispatch(alertBottom(tipo,mensaje)),
        validateSession: () => dispatch(validateSession())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Producto from '../components/product';
import Alert from '../components/AlertComponents'
import { validateSession } from '../action-creators/logInUser'
import { addItem, setLocalCarrito } from '../action-creators/addCarrito'
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
        this.handleLocalCarrito = this.handleLocalCarrito.bind(this)
    
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
            this.props.fetchProducts(this.props.inputValue,
                this.props.categoryParams,
                this.props.min, this.props.max, 1)
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
        this.props.alertBottom('success','Se ha agregado el producto al carrito')
        this.setState({
            show:true
        })
    }
    handleLocalCarrito(e){
        for (let i=0; i<this.props.listaProductos.length; i++){
            if(this.props.listaProductos[i].id == e.target.name){
                this.props.setLocalCarrito(this.props.listaProductos[i])
            }
        }
        // this.props.alertBottom('success','Se ha agregado el producto al carrito')
        // this.setState({
        //     show:true
        // })
    }

    render() {
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
                handleLocalCarrito={this.handleLocalCarrito}
                isLoggedIn={this.props.isLoggedIn}
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
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (input, category, min, max, page) => dispatch(fetchProducts(input, category, min, max, page)),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        alertBottom:(tipo,mensaje)=> dispatch(alertBottom(tipo,mensaje)),
        validateSession: () => dispatch(validateSession()),
        setLocalCarrito: (producto) => dispatch(setLocalCarrito(producto))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer)
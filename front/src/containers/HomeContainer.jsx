import React from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts } from '../action-creators/getProducts'
import Producto from '../components/product'
import Footer from '../components/Footer'
import Home from '../components/Home'

class HomeContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.fetchAllProducts()
    }

    render() {
        return (
            <div>
                <Home />
                <Producto
                    col={3}
                    list={this.props.listaProductos}
                />
                 <Footer/>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        listaProductos: state.product.productos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: ()=> dispatch(fetchAllProducts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)


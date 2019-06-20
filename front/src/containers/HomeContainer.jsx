import React from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import Home from '../components/Home';
import Footer from '../components/Footer'
=======
import { fetchAllProducts } from '../action-creators/getProducts'
import Producto from '../components/product'

import Home from '../components/Home'
>>>>>>> 2e91a50539c3aeadb987c8e45861c482030a9142

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

<<<<<<< HEAD
                    <Home />
                    <Footer/>
=======
>>>>>>> 2e91a50539c3aeadb987c8e45861c482030a9142
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


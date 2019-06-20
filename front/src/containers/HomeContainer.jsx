import React from 'react'
import { connect } from 'react-redux'
import { fetchAllProductsHome } from '../action-creators/getProducts'
import Producto from '../components/product'

import Home from '../components/Home'

class HomeContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        this.props.fetchAllProductsHome()
    }
    
    render() {
        return (
            <div>
                <Home />
                <Producto
                    col={3}
                    list={this.props.listaProductos}
                />

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        listaProductos: state.product.productosHome
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProductsHome: ()=> dispatch(fetchAllProductsHome())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)


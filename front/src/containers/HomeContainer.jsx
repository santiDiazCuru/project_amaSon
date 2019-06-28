import React from 'react'
import { connect } from 'react-redux'
import { fetchAllProductsHome } from '../action-creators/getProducts'
import ProductoContainer from '../containers/ProductContainer'
import Footer from '../components/Footer'
import Home from '../components/Home'


class HomeContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchAllProductsHome()
        
    }
        
    render() {
        return (
            <div>
                <Home />
                {/* <Producto
                    col={3}
                    list={this.props.listaProductos}
                /> */}
                <ProductoContainer />
                 <Footer/>

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


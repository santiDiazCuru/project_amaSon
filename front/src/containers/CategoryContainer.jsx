import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../action-creators/getProducts'
import Producto from '../components/product'

class CategoryContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAllProducts(this.props.categoryParams)
    }
    componentDidUpdate(prevProps) {
         if (this.props.categoryParams !== prevProps.categoryParams) {
            this.props.fetchAllProducts(this.props.categoryParams)
         }
    }
    render() {
        return <div className="container-fluid">
            <div className="row">
                <br /><br />
                <div className="col-sm-3 col-md-2 sidebar" style={({ zIndex: 8 })}>
                    <ul className="nav nav-sidebar">

                        <br />
                        <li><a href="">====================</a></li>
                        <li><a href="">====================</a></li>
                        <li><a href="">====================</a></li>
                        <li><a href="">COMPONENTE</a></li>
                        <li><a href="">FILTRO============</a></li>
                        <li><a href="">====================</a></li>
                        <li><a href="">====================</a></li>
                        <li><a href="">====================</a></li>
                        <li><a href="">====================</a></li>

                        <br />

                    </ul>
                </div>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <ol className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link >Categorias</Link></li>
                        <li className="active">{this.props.categoryParams}</li>
                    </ol>
                    {console.log(this.props.listaProductos,"LISTA")}
                    <Producto
                        col={3}
                        list={this.props.listaProductos}
                    />
                </div>
            </div>
        </div>
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        listaProductos: state.product.productos,
        categoryParams: ownProps.match.params.category
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: (category) => dispatch(fetchAllProducts(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)
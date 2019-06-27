import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../action-creators/getSingleProduct'
import SingleProduct from '../components/SingleProduct'
import { postReviews, fetchReviews } from '../action-creators/reviews'
import { addItem, setLocalCarrito } from '../action-creators/addCarrito'
import { alertBottom } from '../action-creators/getProducts'



class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comentario: '',
            valoracion: 0,
            show: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCarrito = this.handleCarrito.bind(this)
    }

    componentDidMount() {
        this.props.fetchSingleProduct(this.props.productId)
        this.props.fetchReviews(this.props.productId)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.isLoggedIn) {
            let dataReview = {
                comentario: this.state.comentario,
                valoracion: this.state.valoracion,
                productId: this.props.productito.id,
                userId: this.props.user.id
            }
            postReviews(dataReview)
            // this.setState({
            //     valoracion: 0,
            //     comentario: ''
            // })
        } else {
            alert('Debe estar loggeado para enviar reviews')
        }
    }
    btnCerrar() {
        this.setState({
            show: false
        })
    }

    handleChange(e) {
        e.preventDefault()
        e.target.name == 'comentario' ? this.setState({ comentario: e.target.value }) : this.setState({ valoracion: e.target.value })
    }

    handleCarrito(e) {
        this.props.isLoggedIn ? addItem(e.target.name, this.props.user.id) : this.props.setLocalCarrito(this.props.productito)
        this.props.alertBottom('success', 'Se ha agregado el producto al carrito');
        this.setState({
            show:true
        })
    }


    render() {
        return (
            <div>

                <SingleProduct
                    p={this.props}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleCarrito={this.handleCarrito}
                    rev={this.props.reviews}
                />

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productito: state.singleProduct.singleProduct,
        productId: ownProps.match.params.id,
        user: state.user.currentUser,
        isLoggedIn: state.user.isLoggedIn,
        reviews: state.productReviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleProduct: (prod) => dispatch(fetchSingleProduct(prod)),
        fetchReviews: (rev) => dispatch(fetchReviews(rev)),
        alertBottom: (tipo, mensaje) => dispatch(alertBottom(tipo, mensaje)),
        setLocalCarrito: (producto) => dispatch(setLocalCarrito(producto))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleProductContainer)
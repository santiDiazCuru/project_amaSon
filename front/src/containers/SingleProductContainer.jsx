import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../action-creators/getSingleProduct'
import SingleProduct from '../components/SingleProduct'
import { postReviews } from '../action-creators/reviews'
import {addItem} from '../action-creators/addCarrito'


class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comentario: '',
            valoracion: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCarrito = this.handleCarrito.bind(this)
    }

    componentDidMount() {
        this.props.fetchSingleProduct(this.props.productId)
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
        } else {
            alert('Debe estar loggeado para enviar reviews')
        }
    }

    handleChange(e) {
        e.preventDefault()
        e.target.name == 'comentario' ? this.setState({ comentario: e.target.value }) : this.setState({ valoracion: e.target.value })
    }

    handleCarrito(e) {
        this.props.isLoggedIn ? addItem(e.target.name, this.props.user.id) : alert('el usuario no esta loggeado y hay que hacer que se guarde en local storage perritoou')
    }


    render() {
        return (
            <div>

                <SingleProduct
                    p={this.props}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleCarrito={this.handleCarrito}
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
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleProduct: (prod) => dispatch(fetchSingleProduct(prod))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleProductContainer)
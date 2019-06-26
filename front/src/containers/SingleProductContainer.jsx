import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../action-creators/getSingleProduct'
import SingleProduct from '../components/SingleProduct'
import { postReviews } from '../action-creators/reviews'


class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props)     
        this.state = {
            comentario: '',
            valoracion: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchSingleProduct(this.props.productId)
    }

    handleSubmit(e){
        console.log("estoy entrando en handlesubmit")
        e.preventDefault();
        if(this.props.isLoggedIn){
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

    handleChange(e){
        e.preventDefault()
        e.target.name == 'comentario' ? this.setState({comentario: e.target.value}) : this.setState({valoracion: e.target.value})
    }



    render() {
        return (
            <div>

                <SingleProduct
                    p={this.props}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
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
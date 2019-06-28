import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../action-creators/getSingleProduct'
import SingleProduct from '../components/SingleProduct'
import { postReviews, fetchReviews } from '../action-creators/reviews'
import { addItem, setLocalCarrito } from '../action-creators/addCarrito'
import { alertBottom } from '../action-creators/getProducts'
import AlertComponents from '../components/AlertComponents'



class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comentario: '',
            valoracion: 0,
            show: false,
            mensaje: "",
            tipo: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCarrito = this.handleCarrito.bind(this)
        this.btnCerrar = this.btnCerrar.bind(this)
    }

    btnCerrar(){
        this.setState({
            show:false
        })
    }
    componentDidMount() {
        this.props.fetchSingleProduct(this.props.productId)
        this.props.fetchReviews(this.props.productId)
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (this.props.reviews.length !== prevProps.reviews.length) {
    //         this.props.fetchReviews()
    //         this.setState({comentario: '', valoracion: 0})
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.isLoggedIn) {
            let dataReview = {
                comentario: this.state.comentario,
                valoracion: this.state.valoracion,
                productId: this.props.productito.id,
                userId: this.props.user.id,
                username: this.props.user.username
            }
            console.log("SOY PROPS", this.props)
            this.props.postReviews(dataReview)
            .then(() => {console.log("ENTREO A LA PROMESA")
            this.props.fetchReviews(this.props.productId)})
            this.setState({
                valoracion: 0,
                comentario: ''
            },
            () => console.log('ESTOY SETEANDO EL ESTADO', this.state))
            
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
            show:true,
            mensaje: "Agregado exitosamente al carrito!",
            tipo: "success"
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
                    valoracion={this.state.valoracion}
                    comentario={this.state.comentario}
                />
                <AlertComponents 
                 show={this.state.show}
                 btnCerrar={this.btnCerrar}
                 tipo = {this.state.tipo}
                 mensaje = {this.state.mensaje}
                
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
        setLocalCarrito: (producto) => dispatch(setLocalCarrito(producto)),
        postReviews: (id) => dispatch(postReviews(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleProductContainer)
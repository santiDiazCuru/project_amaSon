import React from 'react'
import { connect } from 'react-redux'
import Formulario from '../components/Formulario'
import { addNewProduct } from '../action-creators/getProducts'

class AddProductContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            category: [],
            response: '',
            newCategory: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'],
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleStock = this.handleStock.bind(this);
        this.handleImg1 = this.handleImg1.bind(this);
        this.handleImg2 = this.handleImg2.bind(this);
        this.handleImg3 = this.handleImg3.bind(this);

        this.handleCategory = this.handleCategory.bind(this);
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    handleSubmit(e) {
        window.scrollTo(0, 0)
        e.preventDefault()
        this.props.addNewProduct(this.state)
            .then(res => {
                this.setState({ response: 'ok' })
            })
            .catch(res => {
                this.setState({ response: 'error' })
            })
    }

    handleTitle(event) { this.setState({ titulo: event.target.value }) }
    handleDescription(event) { this.setState({ descripcion: event.target.value }) }
    handlePrice(event) { this.setState({ precio: event.target.value }) }
    handleStock(event) { this.setState({ stock: event.target.value }) }
    handleImg1(event) { this.setState({ img1: event.target.value }) }
    handleImg2(event) { this.setState({ img2: event.target.value }) }
    handleImg3(event) { this.setState({ img3: event.target.value }) }

    handleCategory(e) {
        let arr = this.state.category
        let pos = arr.indexOf(event.target.value)

        if (event.target.checked) {
            arr.push(event.target.value)
        } else if (pos != -1) {
            arr.splice(pos, 1)
        }
        this.setState({ category: arr });
    }

    // Renderiza body
    // ===============================================
    render() {
        return <div className="container-fluid">
            <div className="row">
                <br /><br />
                <div className="col-sm-3 col-md-2 sidebar" style={({ zIndex: 8 })}>
                    {/* RENDERIZA COMPONENTE DE FILTRO */}
                    <br />
                    <br />
                    <img src="https://cdn2.iconfinder.com/data/icons/business-management-69/64/branding-idea-product-commercial-create-business-512.png" width="100%" />
                    <center style={({ fontSize: 18 })}>
                        <strong>Agregar</strong>
                        <br />
                        <strong>Producto</strong>
                    </center>

                </div>

                <Formulario
                    handleSubmit={this.handleSubmit}
                    handleTitle={this.handleTitle}
                    handleDescription={this.handleDescription}
                    handlePrice={this.handlePrice}
                    handleStock={this.handleStock}
                    handleImg1={this.handleImg1}
                    handleImg2={this.handleImg2}
                    handleImg3={this.handleImg3}
                    handleCategory={this.handleCategory}
                    response={this.state.response}
                    newCategory = {this.state.newCategory}
                />

                <div className="col-sm-4  main">
                    vista previa:
                <img src="https://d34zlyc2cp9zm7.cloudfront.net/products/23318529d9e272a29da19c3f5e833c35fdc9bae171f6221c9910f3578b243edd.webp_250"
                        width="100%"
                        alt="" />
                </div>
            </div>
        </div>
    }

}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewProduct: (data) => dispatch(addNewProduct(data))
        //fetchProducts: (input, category, min, max, page) => dispatch(fetchProducts(input, category, min, max, page)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddProductContainer)
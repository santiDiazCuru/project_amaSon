import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Producto from '../components/product'
import SidebarComponent from '../components/SidebarComponent'
import { fetchProducts } from '../action-creators/getProducts'
import {addItem} from '../action-creators/addCarrito'
import { validateSession } from '../action-creators/logInUser'

class CategoryContainer extends React.Component {
    //Eventos del filtro
    // ===============================================
    constructor() {
        super();
        // cambiar el estado de price default por la diferencia el precio menor y el mayor
        this.state = {
            priceMin: 0,
            priceMax: 100000,
            color: '#f2ff00',
            letraMax: 12,
            letraMin: 20,
            categoria: ''
        };
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
        this.handleClickMin = this.handleClickMin.bind(this);
        this.handleClickMax = this.handleClickMax.bind(this);
        this.handleChangeLetraMin = this.handleChangeLetraMin.bind(this);
        this.handleChangeLetraMax = this.handleChangeLetraMax.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadioCateg = this.handleRadioCateg.bind(this)
        this.nextPage = this.nextPage.bind(this)
    };

    componentDidMount() {
        this.props.validateSession();
        window.scrollTo(0, 0)
    }


    handleClickMin(e) {
        e.preventDefault();
        // cambiar el estado de price default por la diferencia el precio menor y el mayor
        this.setState({ priceMin: 0 }, () => this.setState({ color: '#f2ff00' }))
    };

    handleRadioCateg(e) {
        e.preventDefault();
        this.setState({ categoria: e.target.value })

    }

    handleSubmit(e) {
        e.preventDefault();
        // cambiar el estado de price default por la diferencia el precio menor y el mayor

        this.props.fetchProducts(this.props.inputValue,
            this.state.categoria,
            this.state.priceMin, this.state.priceMax, 1)
    };
    nextPage(page) {
        this.props.fetchProducts(this.props.inputValue,
            this.state.categoria,
            this.state.priceMin, this.state.priceMax, page)
    }
    handleChangeLetraMin() {
        // console.log(this.state.priceMin)
        this.state.priceMin.toString().length == 1 && this.setState({ letraMin: 20 })
        this.state.priceMin.toString().length == 2 && this.setState({ letraMin: 18 })
        this.state.priceMin.toString().length == 3 && this.setState({ letraMin: 16 })
        this.state.priceMin.toString().length == 4 && this.setState({ letraMin: 14 })
        this.state.priceMin.toString().length == 5 && this.setState({ letraMin: 12 })
    }

    handleChangeMin(e) {
        e.preventDefault();
        this.state.priceMin && this.handleChangeLetraMin()
        let priceMin = Number(e.target.value)

        this.setState({ priceMin }, () => {
            if (this.state.priceMin >= this.state.priceMax) {
                this.setState({ color: '#ff0000' })
                let priceMin = this.state.priceMax - 1
                this.setState({ priceMin })
            } else {
                this.setState({ color: '#f2ff00' })
            }
        })

    };
    
    handleClickMax(e) {
        e.preventDefault();
        // cambiar el estado de price default por la diferencia el precio menor y el mayor
        this.setState({ priceMax: 100000 }, () => this.setState({ color: '#f2ff00' }))
    };

    handleChangeMax(e) {
        e.preventDefault();
        this.state.priceMax && this.handleChangeLetraMax()
        let priceMax = Number(e.target.value)
        this.setState({ priceMax }, () => {
            if (this.state.priceMax <= this.state.priceMin) {
                this.setState({ color: '#ff0000' })
                let priceMax = this.state.priceMin + 1
                this.setState({ priceMax })
            } else {
                this.setState({ color: '#f2ff00' })
            }
        })
    };
    handleChangeLetraMax() {
        this.state.priceMax.toString().length == 1 && this.setState({ letraMax: 20 })
        this.state.priceMax.toString().length == 2 && this.setState({ letraMax: 18 })
        this.state.priceMax.toString().length == 3 && this.setState({ letraMax: 16 })
        this.state.priceMax.toString().length == 4 && this.setState({ letraMax: 14 })
        this.state.priceMax.toString().length == 5 && this.setState({ letraMax: 12 })
    }

    // Renderiza body
    // ===============================================
    render() {
        return <div className="container-fluid">
            <div className="row">
                <br /><br />
                <div className="col-sm-3 col-md-2 sidebar" style={({ zIndex: 8 })}>
                    {/* RENDERIZA COMPONENTE DE FILTRO */}
                    <SidebarComponent
                        handleChangeMin={this.handleChangeMin}
                        priceMin={this.state.priceMin}
                        handleClickMin={this.handleClickMin}
                        priceMax={this.state.priceMax}
                        handleChangeMax={this.handleChangeMax}
                        handleClickMax={this.handleClickMax}
                        color={this.state.color}
                        letraMax={this.state.letraMax}
                        letraMin={this.state.letraMin}
                        handleSubmit={this.handleSubmit}
                        handleRadioCateg={this.handleRadioCateg} />
                </div>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <ol className="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link >Categorias</Link></li>
                        <li className="active">{this.props.categoryParams}</li>
                    </ol>

                    <Producto
                        col={3}
                        page={this.props.page}
                        totalPage={this.props.totalPages}
                        list={this.props.listaProductos}
                        nextPage={this.nextPage}
                    />

                </div>
            </div>
        </div>
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        listaProductos: state.product.productos,
        categoryParams: ownProps.match.params.category,
        page: state.product.page,
        totalPages: state.product.totalPages,
        inputValue: state.product.inputValue,
        currentUser: state.user.currentUser,
        isLoggedIn: state.user.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (input, category, min, max, page) => dispatch(fetchProducts(input, category, min, max, page)),
        validateSession: () => dispatch(validateSession())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)
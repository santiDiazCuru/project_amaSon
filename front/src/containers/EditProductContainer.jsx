import React from 'react'
import { connect } from 'react-redux'
import FormularioEditar from '../components/FormularioEditar'
import { editProduct, fetchAllCategory, fetchOneProduct } from '../action-creators/getProducts'

class AddProductContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            category: [],
            response: '',
            newCategory: [],
            titulo: '',
            img1: '',
            img2: '',
            img3: '',
            descripcion: '',
            precio: '',
            stock: '',
            imgFondo: '',
            categoryGuardado:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleStock = this.handleStock.bind(this);
        this.handleImg1 = this.handleImg1.bind(this);
        this.handleImg2 = this.handleImg2.bind(this);
        this.handleImg3 = this.handleImg3.bind(this);
        this.handleCreateInput = this.handleCreateInput.bind(this)
        this.handleCategory = this.handleCategory.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDeleteActivas = this.handleDeleteActivas.bind(this)
    };

    
    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchAllCategory()
        this.props.fetchOneProduct(this.props.idProduct)
            .then(prod=>{
                
                this.setState({
                    titulo: prod.data.titulo,
                    img1: prod.data.img1,
                    img2: prod.data.img2,
                    img3: prod.data.img3,
                    descripcion: prod.data.descripcion,
                    precio: prod.data.precio,
                    stock: prod.data.stock,
                    categoryGuardado:prod.data.category,
                    imgFondo: prod.data.img1,
                    imgFondo2: prod.data.img2,
                    imgFondo3: prod.data.img3,
                })
            })
        
    }
    handleSubmit(e) {
        window.scrollTo(0, 0)
        e.preventDefault()
        // Sumo el push adicional
        let arr = this.state.newCategory
        let save = this.state.categoryGuardado
        let arrCategory = this.state.category

            for(var i = 0;i<save.length;i++){
                arrCategory.push(save[i].categoria)
            }

            arrCategory=arrCategory.filter((a,i,arr)=>arr.indexOf(a)===i)
        if (arr.length) {
            arrCategory.push(...arr)
            
            // if(save.length){
            //     arrCategory.push(...save)
            // }
            arrCategory=arrCategory.filter((a,i,arr)=>arr.indexOf(a)===i)
            this.setState({
                response: '',
                category: arrCategory,
                newCategory: [],
            })
        }

        if(true){
            arrCategory=arrCategory.filter((a,i,arr)=>arr.indexOf(a)===i)
            this.setState({
                response: '',
                category: arrCategory,
                newCategory: [],
            },
            ()=>{
                this.props.editProduct(this.props.idProduct, this.state)

            .then(res => {                
                this.setState({
                    response: 'ok',                    
                })                
            })
            .catch(res => {
                this.setState({ response: 'error' })
            })
            }
            )
            
        }else {
            this.setState({ response: 'categoria' })
        }
    }

    handleTitle(event) { this.setState({ 
        titulo: (event.target.value).toLowerCase(),
        response: '' }) }

    handleDescription(event) { this.setState({ descripcion: event.target.value, response: '' }) }
    handlePrice(event) { this.setState({ precio: event.target.value, response: '' }) }
    handleStock(event) { this.setState({ stock: event.target.value, response: '' }) }
    handleImg1(event) { 
        let image = event.target.value
        this.setState({ 
            img1: event.target.value,
            response: '',
            imgFondo:'https://gvhidra.gva.es/svn/genaro/tags/genaro-4_2_0/img/cargando.gif'
        })
        setTimeout(()=>{
            this.setState({ 
                imgFondo:image
            })
        }, 2000);
     }
    handleImg2(event) { 
        let image = event.target.value
        this.setState({ 
            img2: event.target.value,
            response: '',
            imgFondo2:'https://gvhidra.gva.es/svn/genaro/tags/genaro-4_2_0/img/cargando.gif'
        })
        setTimeout(()=>{
            this.setState({ 
                imgFondo2:image
            })
        }, 2000);}
    handleImg3(event) { 
        let image = event.target.value
        this.setState({ 
            img3: event.target.value,
            response: '',
            imgFondo3:'https://gvhidra.gva.es/svn/genaro/tags/genaro-4_2_0/img/cargando.gif'
        })
        setTimeout(()=>{
            this.setState({ 
                imgFondo3:image
            })
        }, 2000);
    }
    handleCreateInput(event) { this.setState({ newInputCategory: event.target.value, response: '' }) }

    handleDelete(name) {
        let arr = this.state.newCategory
        let pos = arr.indexOf(name)

        arr.splice(pos, 1)
        this.setState({
            newCategory: arr
            , response: ''
        })
    }
    handleDeleteActivas(name) {
        let arr = this.state.categoryGuardado
        let pos = arr.indexOf(name)

        arr.splice(pos, 1)
        this.setState({
            categoryGuardado: arr
        })
    }

    handleAdd() {
        let arr = this.state.newCategory
        let value = (this.state.newInputCategory)
        if (value != "") {
            if (arr.indexOf(value.toLowerCase()) == -1) {
                arr.push(value.toLowerCase())
                this.setState({
                    newCategory: arr,
                    newInputCategory: '', response: ''
                })
            }
        }
    }
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

                <FormularioEditar
                    handleSubmit={this.handleSubmit}
                    handleTitle={this.handleTitle}
                    handleDescription={this.handleDescription}
                    handlePrice={this.handlePrice}
                    handleStock={this.handleStock}
                    handleImg1={this.handleImg1}
                    handleImg2={this.handleImg2}
                    handleImg3={this.handleImg3}
                    handleCategory={this.handleCategory}
                    handleAdd={this.handleAdd}
                    handleDelete={this.handleDelete}
                    handleCreateInput={this.handleCreateInput}
                    listCategory={this.props.listCategory}
                    state={this.state}
                    handleDeleteActivas={this.handleDeleteActivas}
                    
                />

                <div className="col-sm-3  main">
                    vista previa (Img Principal):
                {(this.state.imgFondo2 !== "") &&
                        <img src={this.state.imgFondo}
                            width="100%"
                            alt="" />
                }
                </div>
                <div className="col-sm-2  main">
                    (Img2 / Img3):
                {(this.state.imgFondo3 !== "") &&
                        <span>
                            <img src={this.state.imgFondo2}
                            width="100%"
                            alt="" />
                            <br/>
                        <img src={this.state.imgFondo3}
                            width="100%"
                            alt="" />
                        </span>
                }
                </div>
            </div>
        </div>
    }

}

const mapStateToProps = (state, ownProps) => {
    
    return {
        idProduct:ownProps.match.params.id,
        listCategory: state.product.listCategory
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editProduct: (id,data) => dispatch(editProduct(id, data)),
        fetchAllCategory: () => dispatch(fetchAllCategory()),
        fetchOneProduct:(id)=>dispatch(fetchOneProduct(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductContainer)
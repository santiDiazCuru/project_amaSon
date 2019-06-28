import React from 'react'
import { connect } from 'react-redux'
import VentasComponent from '../components/VentasComponents'
import { validateSession } from '../action-creators/logInUser'
import {changeOCStatus} from '../action-creators/getCompras'
import Axios from "axios"

class VentasContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            ListOC: [],
            data: "todos"
        }
        this.changeSelect = this.changeSelect.bind(this)
        this.changeBuscar = this.changeBuscar.bind(this)
        this.changeStatus = this.changeStatus.bind(this)
    };
    changeSelect(e) {
        this.setState({
            data: e.target.value
        })
    }

    changeBuscar(e) {
        var id = (this.props.currentUser.hasOwnProperty('id')) ? this.props.currentUser.id : 0
        var status = this.state.data
       

        let miPromesa = Axios.get(`/api/compras/estados/${id}/${status}`)
            .catch(err => console.log(err, "ERRRO"))

        let arregloo = []
        arregloo.push(miPromesa)

        Promise.all(arregloo)
            .then((productos) => {
                const depurado = Filter(productos[0].data)
                this.setState({
                    ListOC: depurado
                })
            })
    }
    componentDidMount() {
        //
        this.props.validateSession()
            
        var id = (this.props.currentUser.hasOwnProperty('id')) ? this.props.currentUser.id : 0
        var status = this.state.data
        var admin = this.props.currentUser.isAdmin.toString()

        let miPromesa = Axios.get(`/api/compras/estados/${id}/${status}/${admin}`)
            .catch(err => console.log(err, "ERRRO"))

        let arregloo = []
        arregloo.push(miPromesa)

        Promise.all(arregloo)
            .then((productos) => {
                const depurado = Filter(productos[0].data)
                this.setState({
                    ListOC: depurado
                })
            })
    } 
     changeStatus(e){
         changeOCStatus(e.target.name, e.target.id)
         .then(()=>this.state.changeBuscar)
         alert('Se ha actualizado el estado correctamente')
        this.props.history.push('/ventas')
     }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <br /><br />
                    <div className="col-sm-2 col-md-2 sidebar" style={({ zIndex: 8 })}>
                        {/* RENDERIZA COMPONENTE DE FILTRO */}
                        <br /><img width="100%" src="https://png.pngtree.com/png_detail/18/09/10/pngtree-design-of-online-shopping-payment-png-clipart_2099730.jpg" alt="" />
                        <br /><hr />
                        <img width="100%" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160911629/62901362-compras-en-l%C3%ADnea-ecommerce-iconos-planos-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg" alt="" />
                    </div>
                    <div className="col-sm-8 col-sm-offset-8 col-md-8 col-md-offset-2 main">
                        <VentasComponent
                            ListOC={this.state.ListOC}
                            isLoggedIn={this.props.isLoggedIn}
                            changeSelect={this.changeSelect}
                            changeBuscar={this.changeBuscar}
                            changeStatus={this.changeStatus}
                            currentUser={this.props.currentUser}
                        />
                    </div>
                </div>
            </div>
        );

    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.user.currentUser,
        isLoggedIn: state.user.isLoggedIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        validateSession: () => dispatch(validateSession()),
        changeStatus: (newStatus, OCid) => dispatch(changeStatus(newStatus,OCid))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VentasContainer)

function Filter(arreglo) {
    // CREA UN ARREGLO CON LOS FILTROS DEPURADOS
    var filter = []
    arreglo.forEach(OCFilter => {
        filter.push({
            OCId: OCFilter.OCId,
            Cantidad: OCFilter.cantidad,
            Importe: (Number(OCFilter.cantidad) * Number(OCFilter.product.precio)),
            Estado: OCFilter.OC.estado,
            createdAt:OCFilter.OC.createdAt
        })
    });

    // FILTRO FINAL === AGRUPA POR CANTIDAD DE OC
    var newArr = []
    filter.forEach(row => {
        if (newArr.find((val) => val.OCId === row.OCId)) {
            newArr.forEach((data) => {
                if (data.OCId == row.OCId) {
                    data.Cantidad += row.Cantidad
                    data.Importe += row.Importe
                }
            })
        } else {
            newArr.push({
                OCId: row.OCId,
                Estado: row.Estado,
                Importe: row.Importe,
                Cantidad: row.Cantidad,
                createdAt:row.createdAt
            })
        }

    });
    return newArr;
}
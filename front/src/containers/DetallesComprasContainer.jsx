import React from 'react'
import { connect } from 'react-redux'
import DetalleCompra from '../components/DetalleCompra'
import { validateSession } from '../action-creators/logInUser'
import Axios from "axios"

class VentasContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            ListProductOC: [],
            
        }
        
    };
  

    
    componentDidMount() {
        //

        Axios.get(`/api/compras/oc/${this.props.id}`)
        .then((productos) => {
            
            this.setState({
                ListProductOC: productos.data
            })
        })
            .catch(err => console.log(err, "ERRRO"))

            
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
                    <div className="col-sm-9 col-sm-offset-9 col-md-9 col-md-offset-2 main">
                        <DetalleCompra
                            ListProductOC={this.state.ListProductOC}
                        />
                    </div>
                </div>
            </div>
        );

    };
};

const mapStateToProps = (state, ownProps) => {
    
    return {
        id:ownProps.match.params.id
    }
}
const mapDispatchToProps = dispatch => {
    return {
        validateSession: () => dispatch(validateSession()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VentasContainer)

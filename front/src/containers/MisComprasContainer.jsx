import React, {Component} from 'react';
import MisCompras from '../components/MisCompras';
import { connect } from 'react-redux';
import { fetchAllCompras } from '../action-creators/getComprasAll';

class MisComprasContainer extends Component {
    
    componentDidMount() {
        this.props.fetchAllCompras();
    }

    // handleShowShopping (){

    // }

    render(){
        return(
            <div>
                <MisCompras list = { list = this.props.listaCompras }/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
        listaCompras: state.listaCompras // FETCH CARRITO? 
})

const mapDispatchToProps = (dispatch) => ({
        fetchAllCompras:(data) => dispatch(fetchAllCompras(data))    
});



export default connect(mapStateToProps, mapDispatchToProps)(MisComprasContainer);
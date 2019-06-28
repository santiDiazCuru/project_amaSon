import React, {Component} from 'react';
import MisCompras from '../components/MisCompras';
import { connect } from 'react-redux';
import { fetchAllCompras } from '../action-creators/getComprasAll';
import { validateSession } from '../action-creators/logInUser';

class MisComprasContainer extends Component {
    constructor(props) {
        super(props);       
        this.handleShowShopping = this.handleShowShopping.bind(this);
    };
    
    componentDidMount() {
        this.props.validateSession();
    }

    handleShowShopping (e){
        this.props.isLoggedIn? this.props.fetchAllCompras(this.props.current.id): [] ;
        //this.props.current.id?
    }

    render(){
        return(
            <div>
                <MisCompras list = { listacompras = this.props.listaCompras }
                currentUser = { currentUser = this.props.currentUser }
                
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
        listaCompras: state.listaCompras, 
        currentUser: state.user.currentUser,
        userOrdenes: state.compras.userOrdenes,
        isLoggedIn: state.user.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
        fetchAllCompras:(data) => dispatch(fetchAllCompras(data)),
        validateSession: () => dispatch(validateSession())
});



export default connect(mapStateToProps, mapDispatchToProps)(MisComprasContainer);
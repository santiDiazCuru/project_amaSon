import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavbarContainer from './containers/NavbarContainer'
import { connect } from 'react-redux'
// import RegisterContainer from './containers/RegisterContainer'
// import Sidebar2Container from './containers/Sidebar2Container';
import CategoryContainer from './containers/CategoryContainer'
import SearchContainer from './containers/SearchContainer'
import UserListContainer from './containers/UserListContainer';
import AddProductContainer from './containers/AddProductContainer';
import CarritoContainer from './containers/CarritoContainer';
import { validateSession } from './action-creators/logInUser'
import ComprasAll from './containers/MisComprasContainer';

import Axios from 'axios';
import SingleProductContainer from './containers/SingleProductContainer';
import EditProductContainer from './containers/EditProductContainer';
import PerfilAdmin from './containers/PerfilAdmin';
import Saludo from './components/Saludo';
import notfound from './components/notfound';


class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
      this.props.validateSession();
  }

  render() {
    return (<div className="container-fluid">
      {/* NAV */}

      <Route component={NavbarContainer} />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        {/* <Route path = '/register' component={RegisterContainer} />
        <Route path='/search' component={Sidebar2Container}/> */}
        <Route path='/categoria/:category' component={CategoryContainer} />
        <Route path='/search/' component={SearchContainer} />
        <Route path='/users' component={UserListContainer} />
        <Route path='/product/add' component={AddProductContainer} />
        <Route path='/product/update/:id' component={EditProductContainer} />
        <Route path='/carrito' component={CarritoContainer} />
        <Route path='/admin' component={PerfilAdmin} />
        <Route path='/logout' component={Saludo} />
        <Route path='/products/:id' component={SingleProductContainer} />
        <Route path='/products/:id' component={SingleProductContainer} />
        <Route path='/compras/' component={ComprasAll} />
        {/* ROUTES */}
        <Route path="/" component={notfound} />
      </Switch>

    </div>
    )
  }
}
;

const mapDispatchToProps = dispatch => {
  return {
    validateSession: () => dispatch(validateSession()),
  }
}

export default connect(null, mapDispatchToProps)(Main)


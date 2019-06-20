import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavbarContainer from './containers/NavbarContainer'
import RegisterContainer from './containers/RegisterContainer'
import Sidebar2Container from './containers/Sidebar2Container';
import CategoryContainer from './containers/CategoryContainer'

export default () => (

  <div className="container-fluid">
    {/* NAV */}
    
    <NavbarContainer />
    <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <Route path = '/register' component={RegisterContainer} />
        <Route path='/search' component={Sidebar2Container}/>
        <Route path='/categoria/:category' component={CategoryContainer}/>
        {/* ROUTES */}
        {/* <Redirect from="/" to="/notfound" /> */}
      </Switch>

    </div>
  )
;
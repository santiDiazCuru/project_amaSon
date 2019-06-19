import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavbarContainer from './containers/NavbarContainer'
import RegisterContainer from './containers/RegisterContainer'
export default () => (
      
  <div className="container-fluid">
    {/* NAV */}
    
    <NavbarContainer />
    <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <Route path = '/register' component={RegisterContainer} />
        {/* ROUTES */}
        {/* <Redirect from="/" to="/notfound" /> */}
      </Switch>

    </div>
  )
;
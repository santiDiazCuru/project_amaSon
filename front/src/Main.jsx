import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavbarContainer from './containers/NavbarContainer'
export default () => (
  <div className="container-fluid">
    {/* NAV */}
    
    <NavbarContainer />
    <Switch>
        <Route path='/' component={HomeContainer}/>
        {/* ROUTES */}
        {/* <Redirect from="/" to="/notfound" /> */}
      </Switch>

    </div>
  )
;
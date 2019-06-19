import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavbarContainer from './containers/NavbarContainer'


export default () => {

  return (
    <div className="container-fluid">

      <NavbarContainer />
      <Switch>
        {/* <Route path='/products/:search'/> */}
        {/* <Redirect from="/" to="/notfound" /> */}
      </Switch>

    </div>
  )
};
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

export default () => (
  <div className="container-fluid">
    {/* NAV */}
    
    <h1>Hello Amason</h1>
    <Switch>
        <Route path='/' component={HomeContainer}/>
        {/* ROUTES */}
        {/* <Redirect from="/" to="/notfound" /> */}
      </Switch>

  </div>
);
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

export default () => (
  <div className="container-fluid">
    {/* NAV */}
    
    <h1>Hello Amason</h1>
    <Switch>
        
        {/* ROUTES */}
        <Redirect from="/" to="/notfound" />
      </Switch>

  </div>
);
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

export default () => (
  <div className="container-fluid">
    {/* NAV */}
    
    
    <Switch>
        
        {/* ROUTES */}
        <Redirect from="/" to="/notfound" />
      </Switch>

  </div>
);
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Main/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('app'))
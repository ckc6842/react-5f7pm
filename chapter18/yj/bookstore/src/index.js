import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux'
import rootReducer from './reducers'

import App from './components/App.js';
import Index from './components/Index.js';
import Product from './components/product.js';
import Cart from './components/cart.js'
import Checkout from './components/checkout.js'
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render((
    <div>
        <Provider store={store}>
            <Router>
                <Route path="/" exact component={App}/>
                <Route path="/" exact component={Index}/>
                <Route path="/products/:id" exact component={Product} />
                <Route exact path="/cart" render = {props => <Cart {...props}/>} />
                <Route path="/checkout" component={Checkout} />
            </Router>
        </Provider>
    </div>
), document.getElementById('content'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


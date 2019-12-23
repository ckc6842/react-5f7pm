import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import {
  MainPage,
  ProductPage,
  CartPage,
  CheckoutPage,
} from './components/pages'

const routes = [
  {
    name: 'Main Page',
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    name: 'Product',
    path: '/product/:id',
    exact: true,
    component: ProductPage,
  },
  {
    name: 'Cart',
    path: '/cart',
    exact: true,
    component: CartPage,
  },
  {
    name: 'Checkout',
    path: '/checkout',
    exact: true,
    component: CheckoutPage,
  },
]

class Router extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          {
            routes.map(({ path, exact, component }) => {
              return <Route exact={ exact } path={ path } component={ component } />
            })
          }
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
  renderRoute
}

export default Router

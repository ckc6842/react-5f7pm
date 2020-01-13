import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import {
  BookListPage,
  // ProductDetailPage,
  CartPage,
  CheckoutPage,
} from './components/pages'

const routes = [
  {
    name: 'Main Page',
    path: '/',
    component: BookListPage,
    props: {
      isDetailPage: false,
    },
    exact: true,
  },
  {
    name: 'Product',
    path: '/product/:id',
    exact: false,
    props: {
      isDetailPage: true,
    },
    component: BookListPage,
  },
  {
    name: 'Cart',
    path: '/cart',
    exact: false,
    component: CartPage,
  },
  {
    name: 'Checkout',
    path: '/checkout',
    exact: false,
    component: CheckoutPage,
  },
]

class Router extends Component {
  render () {
    return <HashRouter>
      <Switch>
        {
          routes.map(({ path, exact, component: Component, props }, index) =>
            <Route key={ index }
                    exact={ exact }
                    path={ path }
                    render={ (parentProps) =>
                      <Component {...parentProps} {...props} />
                    }
            />
          )
        }
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  }
}

export default Router

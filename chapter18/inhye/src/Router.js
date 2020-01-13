import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Main from './Component/Main'
// import Index from './Component/Index'
import Cart from './Component/Cart'
import Product from './Component/Product'
import Checkout from './Component/Checkout'
import Modal from './Component/Modal'

// let cartItems = {}
// const addToCart = (id) => {
//   if (cartItems[id]) {
//     cartItems[id] += 1
//   } else {
//     cartItems[id] = 1
//   }
// }

const getProduct = async () => {
  const response = await fetch('/products.json')
  return await response.json()
}

const routes = [
  {
    name: 'Main Page',
    path: '/',
    component: Main,
    exact: true,
  },
  {
    name: 'Product',
    path: '/product/:id',
    exact: false,
    component: Product,
  },
  {
    name: 'Cart',
    path: '/cart',
    exact: false,
    component: Cart,
  },
  {
    name: 'Checkout',
    path: '/checkout',
    exact: false,
    component: Checkout,
  },
]

class Router extends Component {
  render () {
    return <BrowserRouter>
      <Switch>
      {
        routes.map(({ path, exact, component: Component }, index) =>
          <Route key={ index }
                 exact={ exact }
                 path={ path }
                 render={ (parentProps) =>{
                   return <Component {...parentProps} getProduct={getProduct} />
                   }
                 }
          />
        )
      }
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  }
}

export default Router
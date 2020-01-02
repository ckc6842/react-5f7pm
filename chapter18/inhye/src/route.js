import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import Main from './Component/Main'
import Index from './Component/Index'
import Cart from './Component/Cart'
import Product from './Component/Product'
import Checkout from './Component/Checkout'

let cartItems = {}
const addToCart = (id) => {
  console.log('addtocart', id)
  if (cartItems[id]) {
    cartItems[id] += 1
  } else {
    cartItems[id] = 1
  }
}

const getProduct = async () => {
  const response = await fetch('/products.json')
  return await response.json()
}

export default (
  <BrowserRouter>
    <Route exact={true} path="/"
    render={(props) => <Main {...props}/>}/>
    <Switch>
      <Route exact path="/"
             render={(props) => <Index {...props} getProduct={getProduct} />} />
      <Route path="/products/:id"
             render={(props) => <Product {...props} addToCart={addToCart} getProduct={getProduct} />} />
      <Route path="/cart"
             render={(props) => <Cart {...props} cartItems={cartItems} getProduct={getProduct} />} />
      <Route path="/checkout"
             render={(props) => <Checkout {...props} cartItems={cartItems} getProduct={getProduct} />} />
    </Switch>
  </BrowserRouter>
)
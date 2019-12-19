import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
// import App from './App';
import Main from './Component/Main'
import Index from './Component/Index'
import Cart from './Component/Cart'
import Product from './Component/Product'
import Checkout from './Component/Checkout'

const PRODUCTS = [
  { id: 0, src: '/images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: '/images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: '/images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: '/images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
  { id: 4, src: '/images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
]

let cartItems = {}
const addToCart = (id) => {
  console.log('addtocart', id)
  if (cartItems[id]) {
    cartItems[id] += 1
  } else {
    cartItems[id] = 1
  }
}
export default (
  <BrowserRouter>
    <Route exact={true} path="/" component={Main} />
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/products/:id"
             render={(props) => <Product {...props} products={PRODUCTS} addToCart={addToCart} />} />
      <Route path="/cart"
             render={(props) => <Cart {...props} products={PRODUCTS} cartItems={cartItems} />} />
      {/* <Route path="/checkout" component={Checkout} cartItems={cartItems} products={PRODUCTS} /> */}
      <Route path="/checkout"
             render={(props) => <Checkout {...props} products={PRODUCTS} cartItems={cartItems} />} />
    </Switch>
  </BrowserRouter>
)
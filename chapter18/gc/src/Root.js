import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import Index from './components/Index'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Product from './components/Product'
import bookStoreApp from './reducer'

let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id]) {
    cartItems[id] += 1
  } else {
    cartItems[id] = 1
  }
}

let store = createStore(bookStoreApp)

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Route path="/" component={App}/>
        <Route path="/" component={(props) => <Index {...props} />}/>
        <Route path="/products/:id" component={(props) => <Product {...props} addToCart={addToCart} />}/>
        <Route path="/cart" component={(props) => <Cart {...props} cartItems={cartItems} />} />
        <Route path="/checkout" component={(props) => <Checkout {...props} cartItems={cartItems} />} />
      </Router>
    )
  }
}

class Root extends React.Component {
  constructor () {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    fetch('/products.json')
      .then((response) => response.json())
      .then((products) => {
        this.setState({
          products: products
        })
      })
  }

  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default Root

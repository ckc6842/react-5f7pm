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

let store = createStore(bookStoreApp)

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Route path="/" component={App}/>
        <Route path="/" exact component={(props) => <Index {...props} />}/>
        <Route path="/products" component={(props) => <Index {...props} />}/>
        <Route path="/products/:id" component={(props) => <Product {...props} />}/>
        <Route path="/cart" component={(props) => <Cart {...props} />} />
        <Route exact path="/checkout" component={(props) => <Checkout {...props} />} />
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

  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default Root

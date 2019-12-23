import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Modal from './components/Modal'
import Product from './components/Product'

const Heading = () => {
  return <h1>Nile 서점</h1>
}

const Copy = () => {
  return <p>팝업에서 자세한 내용을 확인하려면 책을 클릭하세요.</p>
}

class Base extends React.Component {
  constructor () {
    super()
  }

  componentDidUpdate () {
    console.log(this.props.location)
    this.isModal = this.props.location.state && this.props.location.state.isModal
    // if (this.isModal &&
    //   this.props.location.key !== this.props.location.key) {
    //   this.previousChildren = this.props.children
    // }
  }

  render () {
    console.log(this.isModal)
    return (
      <div>
        <Heading />
        <div>
          {(this.isModal) ? this.previousChildren : this.props.children}
          {(this.isModal) ?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
              {this.props.childern}
            </Modal>
            :
            ''
          }
        </div>
      </div>
    )
  }
}

class Index extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Copy />
        <p>
          <Link to="/cart" className="btn btn-danger">Cart</Link>
        </p>
        <div>
          {this.props.products.map(picture => (
            <Link key={picture.id}
                  to={{pathname: `/products/${picture.id}`,
                      state: {isModal: true,
                      returnTo: this.props.location.pathname}
                    }
                  }>
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id]) {
    cartItems[id] += 1
  } else {
    cartItems[id] = 1
  }
}

class App extends React.Component {
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
    console.log(cartItems)
    return (
      <Router>
        <Route path="/" component={Base}/>
        <Route path="/" exact component={(props) => <Index {...props} products={this.state.products} />}/>
        <Route path="/products/:id" component={(props) => <Product {...props} products={this.state.products} addToCart={addToCart} />}/>
        <Route path="/cart" component={(props) => <Cart {...props} cartItems={cartItems} products={this.state.products} />} />
        <Route path="/checkout" component={(props) => <Checkout {...props} cartItems={cartItems} products={this.state.products} />} />
      </Router>
    )
  }
}

export default App
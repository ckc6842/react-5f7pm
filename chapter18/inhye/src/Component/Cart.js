import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  componentDidMount () {
    this.props.getProduct().then((products) => {
      this.setState({ products })
    })
  }

	render() {
    if (this.state.products && this.state.products.length === 0) return <></>
    let { products } = this.state
    let { cartItems } = this.props
		return (
      <div style={{ padding: '20px' }}>
        {
          Object.keys(cartItems).length === 0
          ? <p>Your cart is empty</p>
          : ''
        }
        <ul>
          {
            Object.keys(cartItems).map((item, index, list) => {
              return <li key={item}>
                { products[item].title } - { cartItems[item] }
              </li>
            })
          }
        </ul>
        <Link to="/checkout" className="btn btn-primary">Checkout</Link>
        <br/>
        <Link to="/" className="btn btn-info">Home</Link>
      </div>
    )
	}
}

export default Cart

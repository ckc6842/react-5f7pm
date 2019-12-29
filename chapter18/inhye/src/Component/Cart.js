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
		return (
      <div style={{ padding: '20px' }}>
        {
          Object.keys(this.props.cartItems).length === 0
          ? <p>Your cart is empty</p>
          : ''
        }
        <ul>
          {
            Object.keys(this.props.cartItems).map((item, index, list) => {
              return <li key={item}>
                {this.state.products[item].title} - {this.props.cartItems[item]}
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

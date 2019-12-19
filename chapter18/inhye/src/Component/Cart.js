import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cart extends Component {

	render() {
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
                {this.props.products[item].title} - {this.props.cartItems[item]}
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

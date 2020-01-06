import React from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

class Checkout extends React.Component {
  render () {
    let count = 0
    return (
      <div>
        <h1>주문내역</h1>
        <table className="table table-bordered">
          <tbody>
            {Object.keys(this.props.cartItems).map((item, index, list) => {
              count += this.props.cartItems[item]
              return <tr key={item}>
                <td>{this.props.products[item].title}</td>
                <td>{this.props.cartItems[item]}</td>
              </tr>
            })}
          </tbody>
        </table>
        <p>Total: {count}</p>
      </div>
    )
  }
}

Checkout = connect(
  state => {
    return {
      cartItems: state.cart,
      products: state.products.products,
    }
  },
  dispatch => {
    return {
      
    }
  }
)(Checkout)

export default Checkout
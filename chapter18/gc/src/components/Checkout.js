import React from 'react'
import {
  Link
} from 'react-router-dom'

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

export default Checkout
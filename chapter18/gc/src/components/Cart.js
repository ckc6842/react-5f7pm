import React from 'react'
import {
  Link
} from 'react-router-dom'

import { connect } from 'react-redux'
import { addCart } from '../actions'

class Cart extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        {(Object.keys(this.props.cart).length === 0) ?
        <p>카트에 담은 상품이 없습니다.</p> : ''}
        <ul>
          {Object.keys(this.props.cart).map((item, index, list) => (
            <li key={item}>
              {this.props.products[item].title}
              - {this.props.cart[item]}
            </li>
          ))}
        </ul>
        <Link to="/checkout"
              className="btn btn-primary">
          결제하기
        </Link>
        <Link to="/"
              className="btn btn-info">
          홈
        </Link>
      </div>
    )
  }
}

Cart = connect(
  state => {
    return {
      cart: state.cart,
      products: state.products.products
    }
  }
)(Cart)

export default Cart
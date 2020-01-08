import React, { Component } from 'react'

import connectCart from '../../../store/containers/cart'

import { LinkButton } from '../../'

class CartPage extends Component {
  render () {
    const { cart } = this.props
    return (
      <>
        <h1>Cart Page</h1>
        <section>
          {
            cart.length
            ? this.renderCartItems()
            : <></> 
          }
        </section>
        <section>
          <LinkButton to="/checkout"
                      theme="contained">결제하기</LinkButton>
          <LinkButton to="/"
                      theme="outline"
                      style={{ marginLeft: '10px' }}>홈으로</LinkButton>
        </section>
      </>
    )
  }
  renderCartItems () {
    const { cart } = this.props
    return <ul>
      {
        cart.map((cartItem) => (
        <li>{ cartItem.book.name } - { cartItem.quantity }</li>
        ))
      }
    </ul>
  }
}

export default connectCart(CartPage)

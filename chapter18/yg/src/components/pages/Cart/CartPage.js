import React, { Component } from 'react'

import connectCart from '../../../store/containers/cart'

import { LinkButton } from '../../'

class CartPage extends Component {
  render () {
    return <>
      <h1>Your Cart</h1>
      <section>
        { this.renderCartItems() }
      </section>
      <section>
        { this.renderFooterButtons() }
      </section>
    </>
  }

  renderCartItems () {
    const { cart } = this.props
    if (!cart.length) {
      return <p><strong>카트가 비었습니다.</strong></p>
    }
    return <ul>
      {
        cart.map((cartItem, index) =>
          <li key={ index }>
            {`${ cartItem.book.name } - ${ cartItem.quantity }권`}
          </li>
        )
      }
    </ul>
  }

  renderFooterButtons () {
    const { cart } = this.props
    let buttons = []
    if (cart.length) {
      buttons.push(
        <LinkButton to="/checkout" theme="contained" key="btn-checkout"
                    style={{ marginRight: '10px' }}
                    state={{ checkoutList: cart }}>
          결제하기
        </LinkButton>
      )
    }
    buttons.push(
      <LinkButton to="/" theme="outline" key="btn-go-home">
        홈으로
      </LinkButton>
    )
    return buttons
  }
}

export default connectCart(CartPage)

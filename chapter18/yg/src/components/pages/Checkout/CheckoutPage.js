import React, { Component } from 'react'

import connectCart from '../../../store/containers/cart'
import { LinkButton } from '../../'

class CheckoutPage extends Component {
  constructor (props) {
    super(props)
    if (!props.cart.length) {
      this.props.history.replace('/')
      return
    }
    this.state = {
      checkedOutList: [],
    }
  }

  async componentDidMount () {
    const checkedOutList = await this.props.checkoutCartItems()
    this.setState({ checkedOutList })
  }

  render () {
    if (!this.state.checkedOutList.length) {
      return <>
        <h1>Checkout</h1>
        <section>
          <p>결제 중...</p>
        </section>
      </>
    }

    return <>
      <h1>Checkout Complete!</h1>
      <section>
        <p>결제가 완료되었습니다!</p>
        <h2>Invoice</h2>
        { this.renderCheckoutInvoice() }
      </section>
      <section>
        <p>
          <LinkButton theme="contained" to="/">홈으로</LinkButton>
        </p>
      </section>
    </>
  }

  renderCheckoutInvoice () {
    return <>
      <p>대충 결제 완료 된 목록 아래 데이터로 렌더링</p>
      <p>{ JSON.stringify(this.state.checkedOutList) }</p>
    </>
  }
}

export default connectCart(CheckoutPage)

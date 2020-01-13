import React from 'react'
import { Link } from 'react-router-dom'

class CartView extends React.Component {

  // TODO 카드에 담긴 아이템의 개수와 가격 표시가 필요
  showItemList () {
    const { cart } = this.props
    return <ul> {
      cart.map((item) => (
        <li>{ item.name } - 1 건</li>
      ))
    } </ul>
  }

  render() {
    const { cart } = this.props
    return <div> { 
        (cart.length === 0) ? <p>카드에 담은 상품이 없습니다.</p> : this.showItemList() 
      }
      <Link to="/checkout" className="btn btn-primary">
        결제하기
      </Link>
      <Link to="/" className="btn btn-info">
        홈
      </Link>
    </div>
  }
}

export default CartView

import React from 'react'
import {
  Link
} from 'react-router-dom'

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
  }

  handleBuy (event) {
    this.props.addToCart(this.props.match.params.id)
  }

  render () {
    var productId = this.props.match.params.id
    var product = this.props.products[productId]
    console.log(this.props.products)
    console.log(product)
    return (
      <div>
        <img src={product.src} />
        <p>{product.title}</p>
        <Link to={{pathname: '/cart', state: {productId: productId}}}
              onClick={this.handleBuy}
              className="btn btn-primary">
          구매하기
        </Link>
      </div>
    )
  }
}

export default Product
import React from 'react'
import { Link } from 'react-router-dom'

class ProductDetailView extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
  }

  handleBuy(event) {
    const productId = this.props.match.params.id
    this.props.addToCart(productId)
  }

  render() {
    const productId = this.props.match.params.id
    return <div>
      <img src={this.props.products[productId].src}
        style={{ height: '80%' }} alt=''/>
      <p>{this.props.products[productId].title}</p>
      <Link 
        to={{ pathname: `/cart`, state: {productId: productId}}}
        onClick={this.handleBuy} className='btn btn-primary'>
          구매하기
      </Link>
    </div>
  }

}

export default ProductDetailView

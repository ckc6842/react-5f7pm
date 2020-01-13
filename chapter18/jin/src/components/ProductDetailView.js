import React from 'react'
import { Link } from 'react-router-dom'


class ProductDetailView extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
  }

  handleBuy(event) {
    const productId = this.props.match.params.id
    let product = this.props.getBook(productId)
    this.props.createCartItem(product)
  }

  render() {
    const productId = this.props.match.params.id
    const product = this.props.getBook(productId)
    return <div>
      <img src={product.thumbUrl}
        style={{ height: '80%' }} alt=''/>
      <p>{product.title}</p>
      <Link 
        to={{ pathname: `/cart`, state: {productId: productId}}}
        onClick={this.handleBuy} className='btn btn-primary'>
          구매하기
      </Link>
    </div>
  }

}

export default ProductDetailView

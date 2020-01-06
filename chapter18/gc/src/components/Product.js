import React from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { selectProduct, addToCart, toggleModal } from '../actions'

class Product extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.productId === undefined) {
      this.props.selectProduct(this.props.match.params.id)
    }
  }

  handleBuy = (event) => () => {
    this.props.addToCart(this.props.productId)

    if (this.props.isModal) {
      this.props.toggleModal()
    }
  }

  render () {
    var productId = this.props.productId
    var product = this.props.products ? this.props.products[productId] : undefined
    if (!product) return <div></div>
    if (this.props.isModal && this.props.match) return <div></div>

    return (
      <div>
        <img src={product.src} />
        <p>{product.title}</p>
        <Link to={{pathname: '/cart', state: {productId: productId}}}
              onClick={this.handleBuy()}
              className="btn btn-primary">
          구매하기
        </Link>
      </div>
    )
  }
}

Product = connect(
  state => {
    return {
      products: state.products.products,
      productId: state.products.productId,
      isModal: state.ui.isModal
    }
  },
  dispatch => {
    return {
      selectProduct: (productId) => dispatch(selectProduct(productId)),
      addToCart: (productId) => dispatch(addToCart(productId)),
      toggleModal: () => dispatch(toggleModal())
    }
  }
)(Product)

export default Product
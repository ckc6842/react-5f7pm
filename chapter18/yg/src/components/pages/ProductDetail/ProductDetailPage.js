import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ProductDetail from './ProductDetail'

class ProductDetailPage extends Component {
  render () {
    return <ProductDetail bookId={ Number.parseInt(this.props.match.params.id) }/>
  }
}

export default withRouter(ProductDetailPage)

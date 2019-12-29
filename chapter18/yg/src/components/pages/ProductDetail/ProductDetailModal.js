import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Modal from '../../Modal'

import ProductDetail from './ProductDetail'

const propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
}

class ProductDetailModal extends Component {
  render () {
    const { visibility, setVisibility } = this.props
    return (
      <Modal visibility={ visibility } setVisibility={ setVisibility }>
        <ProductDetail />
      </Modal>
    )
  }
}

ProductDetailModal.propTypes = propTypes

export default ProductDetailModal

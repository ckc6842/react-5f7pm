import React, { Component } from 'react'

import { Modal } from '../../'
import ProductDetail from './ProductDetail'

class ProductDetailModal extends Component {
  render () {
    const { isOpened, onClose, bookId } = this.props
    return (
      <Modal isOpened={ isOpened } onClose={ onClose }>
        <ProductDetail bookId={ bookId } />
      </Modal>
    )
  }
}

ProductDetailModal.propTypes = {
  ...Modal.propTypes,
  ...ProductDetail.propTypes,
}

export default ProductDetailModal

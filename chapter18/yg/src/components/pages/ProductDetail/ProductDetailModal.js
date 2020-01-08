import React, { Component } from 'react'

import connectBookList from '../../../store/containers/bookList'

import { Modal } from '../../'
import ProductDetail from './ProductDetail'

class ProductDetailModal extends Component {
  render () {
    const { isOpened, onClose, bookId, getBook } = this.props
    const selectedBook = getBook(bookId)
    return (
      <Modal isOpened={ isOpened } onClose={ onClose }>
        <ProductDetail book={ selectedBook } />
      </Modal>
    )
  }
}

ProductDetailModal.propTypes = {
  ...Modal.propTypes,
  ...ProductDetail.propTypes,
}

export default connectBookList(ProductDetailModal)

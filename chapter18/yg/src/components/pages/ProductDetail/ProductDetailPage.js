import React, { Component } from 'react'

import connectBookList from '../../../store/containers/bookList'

import ProductDetail from './ProductDetail'
import { LinkButton } from '../../'

class ProductDetailPage extends Component {
  constructor (props) {
    super(props)
    this.isUnmounted = false
    this.state = {
      selectedBook: null,
      isLoading: true,
    }
  }

  async componentDidMount () {
    const { bookId, requestBookList, getBook } = this.props
    await requestBookList()
    if (this.isUnmounted) return
    this.setState({
      selectedBook: getBook(bookId),
      isLoading: false,
    })
  }

  componentWillUnmount () {
    this.isUnmounted = true
  }

  render () {
    const { isLoading, selectedBook } = this.state
    let renderComponent
    if (isLoading) {
      renderComponent = this.renderLoading()
    } else if (!selectedBook) {
      renderComponent = this.renderNotFound()
    } else {
      renderComponent = <ProductDetail book={ selectedBook } />
    }

    return <>
      <h1>Book Detail Page</h1>
      { renderComponent } 
    </>
  }

  renderLoading () {
    return <>
      <section>
        <p>책 정보 불러오는 중...</p>
      </section>
      <LinkButton theme="outline" to="/">
        뒤로 가기
      </LinkButton>
    </>
  }

  renderNotFound () {
    return <>
      <section>
        <p>해당 책을 찾을 수 없습니다.</p>
      </section>
      <LinkButton theme="outline" to="/">
        뒤로 가기
      </LinkButton>
    </>
  }
}

export default connectBookList(ProductDetailPage)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { LinkButton } from '../../'

import connectBookList from '../../../store/containers/bookList'
import connectCart from '../../../store/containers/cart'

const propTypes = {
  bookId: PropTypes.number.isRequired,
  // goBack: PropTypes.func.isRequired,
}

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    const { bookList, bookId } = props
    this.state = {
      selectedBook: bookList.find((book) => book.id === bookId),
    }
    this.addCartItem = this.addCartItem.bind(this)
  }
  render () {
    const { selectedBook } = this.state
    if (!selectedBook) {
      return this.renderItemNotFound()
    }
    return (
      <>
        <DetailHeader>{ selectedBook.name }</DetailHeader>
        <DetailBody>
          <article>
            <BookImg src={ selectedBook.bookImg } alt={ selectedBook.name } />
          </article>
          <article style={{ wordBreak: 'break-all', marginLeft: '16px' }}>
            아무튼 책에 대한 뭔가 자세한 설명 <br/>
            { JSON.stringify(selectedBook) }
          </article>
        </DetailBody>
        { this.renderFooterButtons() }
      </>
    )
  }

  renderItemNotFound () {
    return (
      <>
        <DetailHeader>Book Detail</DetailHeader>
        <DetailBody>
          존재하지 않는 책 입니다.
        </DetailBody>
        { this.renderFooterButtons() }
      </>
    )
  }

  renderFooterButtons () {
    return <DetailFooter>
      <LinkButton theme="contained" to="/cart"
                  onClick={ this.addCartItem }>
        카트에 담기
      </LinkButton>
      <LinkButton theme="outline" to="/">
        뒤로 가기
      </LinkButton>
    </DetailFooter>
  }
  addCartItem () {
    // TODO: 현재는 book의 id를 사용하고 있으나 별도의 cartItem id를 부여하는 것이 좋음
    const book = JSON.parse(JSON.stringify(this.state.selectedBook))
    const cartItem = {
      id: book.id,
      book,
    }
    this.props.addCartItem(cartItem)
  }
}

ProductDetail.propTypes = propTypes

export default withRouter(
  connectCart(
    connectBookList(ProductDetail)
  )
)

const DetailHeader = styled.h1`
  font-size: 20pt;
  margin-top: 0;
`

const DetailBody = styled.section`
  display: flex;
`

const DetailFooter = styled.footer`
  display: flex;
  margin: 15px 0 10px;
  >:last-child {
    margin-left: 10px;
  }
`

const BookImg = styled.img`
  height: 400px;
  border: 1px solid gray;
`
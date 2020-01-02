import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../../'

import connectBookList from '../../../store/containers/bookList'

const propTypes = {
  bookId: PropTypes.number.isRequired,
  // goBack: PropTypes.func.isRequired,
}

class ProductDetail extends Component {
  render () {
    const { bookList, bookId } = this.props
    console.log(this.props)
    const selectedBook = bookList.find((book) => book.id === bookId)
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
      <Button theme="contained">카트에 담기</Button>
      <Button theme="outline"
              onClick={ () => this.props.history.replace('/') }>
        뒤로 가기
      </Button>
    </DetailFooter>
  }
}

ProductDetail.propTypes = propTypes

export default withRouter(connectBookList(ProductDetail))

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
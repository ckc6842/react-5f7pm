import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import connectCart from '../../../store/containers/cart'

import { LinkButton } from '../../'

const propTypes = {
  book: PropTypes.object.isRequired,
}

class ProductDetail extends Component {
  constructor (props) {
    super(props)
    this.addCartItem = this.addCartItem.bind(this)
  }

  render () {
    const { book } = this.props
    // TODO: 다른 컴포넌트들도 이런식으로 템플릿 만들어서
    // 공용 템플릿으로 추출할 수 있을 것 같습니다.
    return <>
      <DetailHeader>{ book.name }</DetailHeader>
      <DetailBody>
        <article>
          <BookImg src={ book.bookImg } alt={ book.name } />
        </article>
        <article style={{ wordBreak: 'break-all', marginLeft: '16px' }}>
          아무튼 책에 대한 뭔가 자세한 설명 <br/>
          { JSON.stringify(book) }
        </article>
      </DetailBody>
      { this.renderFooterButtons() }
    </>
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
    // TODO: 현재는 편의상 book의 id를 사용하고 있으나
    // 별도의 cartItem id를 부여하는 것이 좋음
    const { book, addCartItem } = this.props
    const cartItem = {
      id: book.id,
      book: book,
    }
    addCartItem(cartItem)
  }
}

ProductDetail.propTypes = propTypes

export default connectCart(ProductDetail)

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
import React, { Component } from 'react'
import styled from 'styled-components'

import { LinkButton } from '../../'
import connectBookList from '../../../store/containers/bookList'
import ProductDetailPage from '../ProductDetail/ProductDetailPage'
import ProductDetailModal from '../ProductDetail/ProductDetailModal'

class BookListPage extends Component {
  constructor (props) {
    super(props)
    this.isUnmounted = false
    this.state = {
      selectedBookId: -1,
      isDetailPage: props.isDetailPage,
      isModalOpened: false,
    }
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount () {
    if (!this.state.isDetailPage) {
      this.props.requestBookList()
    }
    if (this.isUnmounted) return
    this.onChangeLocation()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onChangeLocation()
    }
  }

  componentWillUnmount () {
    this.isUnmounted = true
  }

  render () {
    const { isModalOpened, isDetailPage } = this.state
    const { bookList } = this.props

    // TODO: 구조 개선 - BookList에서 경로를 핸들링하지 말고 
    // ProductDetail에서 모달로 보여줄지 페이지로 보여줄지 정하는게 좋을 듯 합니다.
    const bookId = this.getBookIdFromURL()
    const { state = {} } = this.props.location
    const isModal = state.isModal

    if (!isModal && isDetailPage) {
      return <ProductDetailPage bookId={ bookId }/>
    }
    return <>
      <h1>YG 서점</h1>
      <section>
        <p>팝업에서 자세한 내용을 확인하려면 책을 클릭하세요. 팝업의 링크를 복사하거나 붙여넣을 수 있습니다.</p>
        <p>링크는 책에 대한 별도의 페이지로 연결됩니다.</p>
        <LinkButton to="/cart" theme="contained">카트</LinkButton>
      </section>
      <BookList>
        {
          bookList.map((book, index) =>
            <BookButton to={{
                          pathname: `/product/${book.id}`,
                          state: { isModal: true },
                        }} key={ index }>
              <BookImg src={ book.bookImg } alt={ book.name } />
            </BookButton>
          )
        }
      </BookList>
      <ProductDetailModal bookId={ bookId }
                          isOpened={ isModalOpened }
                          onClose={ this.closeModal } />
    </>
  }

  getBookIdFromURL () {
    const bookId = this.props.match.params.id
    return bookId ? Number.parseInt(bookId) : null
  }

  onChangeLocation () {
    this.setState({
      isModalOpened: this.getBookIdFromURL() !== null,
    })
  }

  closeModal () {
    this.props.history.replace('/')
  }
}

export default connectBookList(BookListPage)

const BookList = styled.section`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`

const BookButton = styled(LinkButton)`
  margin: 0;
  border: none;
  background: none;
  padding-left: 0 !important;
`

const BookImg = styled.img`
  height: 200px;
  border: 1px solid gray;
`

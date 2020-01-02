import React, { Component } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'

import { Button } from '../../'
import connectBookList from '../../../store/containers/bookList'
import ProductDetailModal from '../ProductDetail/ProductDetailModal'

class BookListPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedBookId: -1,
      isModalOpened: false,
    }
    this.closeModal = this.closeModal.bind(this)
  }
  async componentDidMount () {
    await this.props.requestBookList()
    this.onChangeLocation()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onChangeLocation()
    }
  }

  render () {
    const { selectedBookId, isModalOpened } = this.state
    const { bookList } = this.props
    return (
      <>
        <h1>YG 서점</h1>
        <section>
          <p>팝업에서 자세한 내용을 확인하려면 책을 클릭하세요. 팝업의 링크를 복사하거나 붙여넣을 수 있습니다.</p>
          <p>링크는 책에 대한 별도의 페이지로 연결됩니다.</p>
          <Button>카트</Button>
        </section>
        <BookList>
          {
            bookList.map((book, index) =>
              <BookButton key={ index }
                          onClick={ () => this.onClickBook(book) }>
                <BookImg src={ book.bookImg } alt={ book.name } />
              </BookButton>
            )
          }
        </BookList>
        <ProductDetailModal bookId={ selectedBookId }
                            isOpened={ isModalOpened }
                            onClose={ this.closeModal } />
      </>
    )
  }

  onChangeLocation () {
    const { location } = this.props
    const { bookId } = queryString.parse(location.search)
    this.setState({
      selectedBookId: bookId ? Number.parseInt(bookId) : -1,
      isModalOpened: !!bookId,
    })
  }

  onClickBook (book) {
    this.props.history.replace(`/?bookId=${book.id}`)
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

// NOTE: 이렇게 상속받는게 맞는 방법일까요..?
// styled-components 복습이 좀 필요할 것 같습니다.
const BookButton = Button.withComponent(
  styled.button`
    margin: 0;
    border: none;
    background: none;
    padding-left: 0 !important;
  `
)

const BookImg = styled.img`
  height: 200px;
  border: 1px solid gray;
`
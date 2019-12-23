import React, { Component } from 'react'
import styled from 'styled-components'

import ProductDetailModal from '../ProductDetail/ProductDetailModal'

class BookListPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      showProductDetailModal: false,
      selectedBookId: false,
    }
  }
  async componentDidMount () {
    const books = await this.requestBookList()
    this.setState({ books })
  }
  render () {
    const { books, selectedBookId, showProductDetailModal } = this.state
    return (
      <>
        <h1>Nile 서점</h1>
        <section>
          <p>팝업에서 자세한 내용을 확인하려면 책을 클릭하세요. 팝업의 링크를 복사하거나 붙여넣을 수 있습니다.</p>
          <p>링크는 책에 대한 별도의 페이지로 연결됩니다.</p>
          <button>카트</button>
        </section>
        <BookList>
          {
            books.map((book, index) =>
              <BookButton key={ index }
                          onClick={ () => this.onClickBook(book) }>
                <BookImg src={ book.bookImg } alt={ book.name } />
              </BookButton>
            )
          }
        </BookList>
        <ProductDetailModal bookId={ selectedBookId }
                            visibility={ showProductDetailModal }
                            setVisibility={ this.setProductDetailModalVisibility } />
      </>
    )
  }

  requestBookList () {
    return Promise.resolve([
      {
        id: 0,
        name: 'Pro Express.js',
        bookImg: '/static/img/books/proexpress-cover.jpg',
      },
      {
        id: 1,
        name: 'Node.js',
        bookImg: '/static/img/books/practicalnode-cover.jpeg',
      },
      {
        id: 2,
        name: 'Express.js',
        bookImg: '/static/img/books/expressapiref-cover.jpg',
      },
      {
        id: 3,
        name: 'React Quickly',
        bookImg: '/static/img/books/reactquickly-cover.jpg',
      },
      {
        id: 4,
        name: 'Full Stack Javascript',
        bookImg: '/static/img/books/fullstack-cover.png',
      },
    ])
  }

  onClickBook (book) {
    this.setState({ selectedBookId: book.id }, () => {
      this.setProductDetailModalVisibility(true)
    })
  }

  setProductDetailModalVisibility (visibility) {
    this.setState({ showProductDetailModal: visibility })
  }
}

const BookList = styled.section`
  margin-top: 20px;
  display: flex;
  > * {
    flex: 1;
    margin-right: 50px;
  }
`

const BookButton = styled.button`
  padding: 0;
  max-width: 160px;
  border: none;
  background: none;
`

const BookImg = styled.img`
  height: 200px;
  border: 1px solid gray;
`

export default BookListPage

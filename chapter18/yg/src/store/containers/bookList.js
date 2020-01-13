import { connect } from 'react-redux'
import { store } from '../'

import {
  setBookList,
} from '../actions/bookList'

const BOOK_LIST = [
  {
    id: 0,
    name: 'Pro Express.js',
    bookImg: '/static/img/books/proexpress-cover.jpg',
    price: 25000,
  },
  {
    id: 1,
    name: 'Node.js',
    bookImg: '/static/img/books/practicalnode-cover.jpeg',
    price: 32000,
  },
  {
    id: 2,
    name: 'Express.js',
    bookImg: '/static/img/books/expressapiref-cover.jpg',
    price: 23000,
  },
  {
    id: 3,
    name: 'React Quickly',
    bookImg: '/static/img/books/reactquickly-cover.jpg',
    price: 17000,
  },
  {
    id: 4,
    name: 'Full Stack Javascript',
    bookImg: '/static/img/books/fullstack-cover.png',
    price: 44000,
  },
]

export const mapBookListStates = (state) => state.bookList

export const mapBookListDispatches = (dispatch) => {
  const getBookStates = () => store.getState().bookList
  return {
    async requestBookList () {
      const bookList = await new Promise(resolve => {
        setTimeout(() => resolve(BOOK_LIST), 2000)
      })
      dispatch(setBookList(bookList))
    },
    getBook (bookId) {
      return getBookStates().bookList.find((book) => book.id === bookId)
    },
  }
}

export default connect(mapBookListStates, mapBookListDispatches)

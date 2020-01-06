import { connect } from 'react-redux'

import {
  setBookList,
} from '../actions/bookList'

export const mapBookListStates = (state) => state.bookList

export const mapBookListDispatches = (dispatch) => {
  return {
    async requestBookList () {
      const bookList = await Promise.resolve([
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
      dispatch(setBookList(bookList))
    }
  }
}

export default connect(mapBookListStates, mapBookListDispatches)

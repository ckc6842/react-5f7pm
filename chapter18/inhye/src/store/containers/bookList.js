import { connect } from 'react-redux'

import {
  setBookList,
} from '../actions/bookList'

export const mapBookListStates = (state) => {
  return {
    state: state.bookListReducer.bookList
  }
}

export const mapBookListDispatches = (dispatch) => {
  return {
    async requestBookList () {
      const response = await fetch('/products.json')
      const bookList = await response.json()
      dispatch(setBookList(bookList))
    },
  }
}

export default connect(mapBookListStates, mapBookListDispatches)

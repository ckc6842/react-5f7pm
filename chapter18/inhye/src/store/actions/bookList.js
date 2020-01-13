const SET_BOOK_LIST = 'SET_BOOK_LIST'

// Action Types
export default {
  SET_BOOK_LIST,
}

// Action Generators
export const setBookList = (bookList) => {
  return { type: SET_BOOK_LIST, bookList }
}
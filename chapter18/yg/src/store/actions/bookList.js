const SET_LIST = 'BOOK_LIST/SET_LIST'

// Action Types
export default {
  SET_LIST,
}

// Action Generators
export const setBookList = (bookList) => {
  return { type: SET_LIST, bookList }
}

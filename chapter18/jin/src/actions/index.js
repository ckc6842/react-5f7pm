import * as types from '../constants/ActionTypes'

export const loadBookList = bookList => ({ 
  type: types.LOAD_BOOK_LIST, 
  bookList: bookList 
})
export const setBookFilter = bookFilter => ({ 
  type: types.SET_BOOK_FILTER, 
  filter: bookFilter 
})
export const createCartItem = product => ({ 
  type: types.CREATE_CART_ITEM, 
  product: product 
})
export const deleteCartItem = product => ({ 
  type: types.DELETE_CART_ITEM, 
  product: product
})

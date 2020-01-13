import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_NEW } from '../constants/BookFilters'

const getBookFilter = state => state.filter
const getBooks = state => state.books
const getCart = state => state.cart

export const getBookList = createSelector(
  [getBookFilter, getBooks],
  (filter, books) => {
    switch (filter) {
      case SHOW_ALL:
        return books
      case SHOW_NEW:
        // TODO 카트에 담긴 북 목록만, 혹은 그 반대만 리턴
        return books
      default:
        return new Error('Unknown filter: ' + filter)
    }
  }
)

export const getBook = createSelector(
  [getBooks],
  books => (
    books.filter(product => {
      // 여기서 URL 에 있는 파라미터를 어떻게 넘겨받지?
      // product.id === 
    })
  )
)

export const getCartList = createSelector(
  [getCart],
  cart => (
    cart.filter(product => {
      console.log('Product: ' + product.id)
      return true
    })
  )
)

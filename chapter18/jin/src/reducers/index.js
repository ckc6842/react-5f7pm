import { combineReducers } from 'redux'
import books from './books'
import bookFilter from './bookFilter'
import cart from './cart'

const rootReducer = combineReducers({
  books,
  bookFilter,
  cart
})

export default rootReducer

import { combineReducers } from 'redux'
import bookListReducer from './bookList'
import cartReducer from './cart'

const rootReducer = combineReducers({
  bookList: bookListReducer,
  cart: cartReducer,
})

export default rootReducer
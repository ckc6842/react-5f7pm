import { combineReducers } from 'redux'
import cartReducer from './cart'
import bookListReducer from './bookList'

const rootReducer = combineReducers({
  cartReducer,
  bookListReducer,
})

export default rootReducer
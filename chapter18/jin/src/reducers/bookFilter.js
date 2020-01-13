import { SET_BOOK_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/BookFilters'

const bookFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_BOOK_FILTER:
      return action.filter
    default:
      return state
  }
}

export default bookFilter
import {
  LOAD_BOOK_LIST
} from '../constants/ActionTypes'

const initialState = [
    {
      id: 0,
      title: 'Pro Express.js',
      coverImageUrl: '/static/img/books/practicalnode-cover.jpeg'
    }
]

export default function books(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOK_LIST:
      return action.bookList

    default:
      return state
  }
}

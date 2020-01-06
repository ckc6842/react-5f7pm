import BOOKLIST_ACTIONS from '../actions/bookList'

const initialState = {
  bookList: [],
}

const bookListReducer = (prevState = initialState, action) => {
  const {
    SET_LIST,
  } = BOOKLIST_ACTIONS

  let nextState = JSON.parse(JSON.stringify(prevState))

  switch (action.type) {
    case SET_LIST:
      nextState.bookList = action.bookList
      break
    default:
  }

  return nextState
}

export default bookListReducer

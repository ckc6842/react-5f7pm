import { combineReducers } from 'redux'
import { FETCH_PRODUCTS } from './actions'

function products (state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...state, ...action.products]
    // case COMPLETE_TODO:
    //   return [
    //     ...state.slice(0, action.index),
    //     Object.assign({}, state[action.index], {
    //       completed: true
    //     }),
    //     ...state.slice(action.index + 1)
    //   ]
    default:
      return state
  }
}

const bookStoreApp = combineReducers({
  products,
})

export default bookStoreApp
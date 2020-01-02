import { combineReducers } from 'redux'
import { FETCH_PRODUCTS, TOGGLE_MODAL, SELECT_PRODUCT, ADD_TO_CART } from './actions'


var initialProducts = {
  products: [],
  productId: undefined,
}
function products (state = initialProducts, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, {
        products: [...state.products, ...action.products],
      })
    case SELECT_PRODUCT:
      return Object.assign({}, state, {
        productId: action.productId
      })
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


var initialCart = {}
function cart (state = initialCart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      var item = {}
      item[action.productId] = state[action.productId] ? state[action.productId] + 1 : 1
      return Object.assign({}, state, item)
    default:
      return state
  }
}

var initialUI = {
  isModal: false
}
function ui (state = initialUI, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        isModal: !state.isModal
      })
    default:
      return state
  }
}

const bookStoreApp = combineReducers({
  products,
  cart,
  ui,
})

export default bookStoreApp
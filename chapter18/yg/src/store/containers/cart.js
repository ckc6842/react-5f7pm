import { connect } from 'react-redux'

import {
  addCartItem,
  removeCartItem,
  clearCart,
} from '../actions/cart'

export const mapCartStates = (state) => state.cart

export const mapCartDispatches = (dispatch) => {
  return {
    addCartItem (cartItem) {
      dispatch(addCartItem(cartItem))
    },
    removeCartItem (itemId) {
      dispatch(removeCartItem(itemId))
    },
    clearCart () {
      dispatch(clearCart())
    },
  }
}

export default connect(mapCartStates, mapCartDispatches)
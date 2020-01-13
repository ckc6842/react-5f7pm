import { connect } from 'react-redux'
import { store } from '../'

import {
  addCartItem,
  // removeCartItem,
  clearCart,
} from '../actions/cart'

export const mapCartStates = (state) => state.cart

export const mapCartDispatches = (dispatch) => {
  const getCartState = () => store.getState().cart
  return {
    addCartItem (cartItem) {
      dispatch(addCartItem(cartItem))
    },
    // NOTE: Unused
    // removeCartItem (itemId) {
    //   dispatch(removeCartItem(itemId))
    // },
    // clearCart () {
    //   dispatch(clearCart())
    // },
    async checkoutCartItems () {
      const checkedOutList = JSON.parse(JSON.stringify(getCartState().cart))
      // API Call for checkout
      await new Promise((resolve) => {
        setTimeout(() => resolve(true), 3000)
      })
      dispatch(clearCart())
      return checkedOutList
    },
  }
}

export default connect(mapCartStates, mapCartDispatches)
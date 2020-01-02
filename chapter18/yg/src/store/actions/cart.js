const ADD_ITEM = 'CART/ADD_ITEM'
const REMOVE_ITEM = 'CART/REMOVE_ITEM'
const CLEAR_CART = 'CART/CLEAR_CART'

// Action Types
export default {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
}

// Action Generators
export const addCartItem = (cartItem) => {
  return { type: ADD_ITEM, cartItem }
}

export const removeCartItem = (itemId) => {
  return { type: REMOVE_ITEM, itemId }
}

export const clearCart = () => {
  return { type: CLEAR_CART }
}

import CART_ACTIONS from '../actions/cart'

const initialState = {
  cart: [],
}

const addCartItem = (prevCart, cartItem) => {
  return [
    ...prevCart,
    cartItem,
  ]
}

const removeCartItem = (prevCart, itemId) => {
  return prevCart.filter(cartItem => cartItem.id !== itemId)
}

const cartReducer = (prevState = initialState, action) => {
  const {
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_CART,
  } = CART_ACTIONS

  let nextState = JSON.parse(JSON.stringify(prevState))

  switch (action.type) {
    case ADD_ITEM:
      nextState.cart = addCartItem(prevState.cart, action.cartItem)
      break
    case REMOVE_ITEM:
      nextState.cart = removeCartItem(prevState.cart, action.itemId)
      break
    case CLEAR_CART:
      nextState.cart = initialState.cart
      break
    default:
  }

  return nextState
}

export default cartReducer

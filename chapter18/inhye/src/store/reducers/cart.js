import CART_ACTIONS from '../actions/cart'
const initialState = {
  cart: [],
}
const cartReducer = (state = initialState, action) => {
  let { ADD_CART } = CART_ACTIONS
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ADD_CART:
      newState.cart = [...state.cart, action.item]
    default:
  }
  return newState
}

export default cartReducer
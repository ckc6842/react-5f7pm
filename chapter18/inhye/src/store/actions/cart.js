const ADD_CART = 'ADD_CART'

export default {
  ADD_CART,
}

export const addToCart = (item) => {
  return { type: ADD_CART, item }
}
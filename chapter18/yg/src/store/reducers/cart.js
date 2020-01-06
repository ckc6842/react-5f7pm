import CART_ACTIONS from '../actions/cart'

const initialState = {
  cart: [
    // Dummy Item
    // {
    //   id: 999,
    //   book: {
    //     id: 999,
    //     name: 'Dummy Book',
    //   },
    //   quantity: 999,
    // },
  ],
}

// 기존 아이템이 있으면 quantity 증가, 없으면 아이템 추가
const addCartItem = (prevCart, cartItem) => {
  prevCart = JSON.parse(JSON.stringify(prevCart))
  let existItem = prevCart.find(prevItem => prevItem.id === cartItem.id)
  const addQuantity = cartItem.quantity || 1
  if (existItem) {
    existItem.quantity = existItem.quantity + addQuantity
    return prevCart
  } else {
    existItem = cartItem
    existItem.quantity = addQuantity
    return [
      ...prevCart,
      existItem,
    ]
  }
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

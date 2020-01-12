import { ADD_TO_CART } from '../constants/ActionTypes'

const initialState = {
    cartList:[]
}

const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        state.cartList.push(action.bookID)
        return state
    //   return {
    //       ...state,
    //       cartList:state.cartList.push(action.bookID)
    //   };
    default:
      return state
  }
}

export default addToCart
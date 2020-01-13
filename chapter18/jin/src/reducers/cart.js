import {
  CREATE_CART_ITEM,
  DELETE_CART_ITEM
} from '../constants/ActionTypes'

const initialState = []

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CREATE_CART_ITEM:
      // TODO 같은 상품 아이디일 경우 수량과 전체 가격만 업데이트 
      return [
        ...state,
        action.product
      ]

    case DELETE_CART_ITEM:
      return state.filter(product => product.id !== action.product.id)
      
    default:
      return state
  }
}
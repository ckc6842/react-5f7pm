import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('cart actions', () => {
  it('addToCart should create CREATE_CART_ITEM action', () => {
    expect(actions.createCartItem('P001')).toEquals({
      type: types.CREATE_CART_ITEM,
      productId: 'P001'
    })
  })

  it('deleteFromCart should create DELETE_CART_ITEM action', () => {
    expect(actions.deleteCartItem('P001')).toEquals({
      type: types.DELETE_CART_ITEM,
      productId: 'P001'
    })
  })
})

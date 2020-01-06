/*
 * action types
 */

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const ADD_TO_CART = 'ADD_TO_CART'

/*
 * other constants
 */


/*
 * action creators
 */

export function fetchProducts (products) {
  return ({
    type: FETCH_PRODUCTS,
    products
  })
}

export function selectProduct (productId) {
  return ({
    type: SELECT_PRODUCT,
    productId
  })
}

export function addToCart (productId) {
  return ({
    type: ADD_TO_CART,
    productId
  })
}

export function toggleModal () {
  return ({
    type: TOGGLE_MODAL
  })
}
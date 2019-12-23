/*
 * action types
 */

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

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

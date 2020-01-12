import { connect } from 'react-redux'
import { addToCart } from './../actions/cart'

const mapStateToProps = (state) => {
  return {
    state: state.cartReducer.cart
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    addCart: (item) => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
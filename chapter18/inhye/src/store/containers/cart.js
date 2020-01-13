import { connect } from 'react-redux'
import { addToCart } from './../actions/cart'
//  combinereducer 이후에는 이렇게 묶인다.
//  state의 일부를 props로 보낸다.
const mapStateToProps = (state) => {
  return {
    state: state.cartReducer.cart
  }
}
//  컴포넌트에서 사용하는 함수
//  쓸만한 함수를 보낸다.
const mapDispatchToProps = (dispatch, state) => {
  return {
    addCart: (item) => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
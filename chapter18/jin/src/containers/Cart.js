import { connect } from 'react-redux'
import * as CartActions from '../actions'
import { bindActionCreators } from 'redux'
import CartView from '../components/CartView'
import { getCartList } from '../selectors'

const mapStateToProps = state => ({
  bookListInCart: getCartList
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CartActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

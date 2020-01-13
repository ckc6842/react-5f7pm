import { connect } from 'react-redux'
import * as BookActions from '../actions'
import { bindActionCreators } from 'redux'
import ProductDetailView from '../components/ProductDetailView'

let productId = this.props.match.params.id

const mapStateToProps = state => ({
  product: state.filteredBookList.filter(it => it.product.id === productId)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailView)


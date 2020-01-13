import { connect } from 'react-redux'
import * as BookActions from '../actions'
import { bindActionCreators } from 'redux'
import ProductDetailView from '../components/ProductDetailView'

// TODO 여기서 경로에서 받은 파라미터로 (북) 상품을 담아서 리턴하고 싶으면 어떻게 하지?
// this.props.match.param.id 를 참조하려면?

const mapStateToProps = state => ({
  product: null
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailView)


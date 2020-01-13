import { connect } from 'react-redux'
import CheckoutView from '../components/CheckoutView'

const mapStateToProps = state => ({
  productId: 0
})

export default connect(
  mapStateToProps,
  null
)(CheckoutView)

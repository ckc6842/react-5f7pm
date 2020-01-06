import React from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import { toggleModal, selectProduct } from '../actions'

const Copy = () => {
  return <p>팝업에서 자세한 내용을 확인하려면 책을 클릭하세요.</p>
}

class Index extends React.Component {
  constructor () {
    super()
  }

  handleSelectProduct = (productId) => (e) => {
    this.props.toggleModal()
    this.props.selectProduct(productId)
  }

  render () {
    if (!this.props.isModal && this.props.match.path === '/products' ) return <div></div>
    return (
      <div>
        <Copy />
        <p>
          <Link to="/cart" className="btn btn-danger">Cart</Link>
        </p>
        <div>
          {
            this.props.products.map(product => (
              <Link key={product.id}
                    onClick={this.handleSelectProduct(product.id)}
                    to={{pathname: `/products/${product.id}`,
                        state: {returnTo: this.props.location.pathname}
                      }
                    }>
                <img style={{ margin: 10 }} src={product.src} height="100" />
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}

Index = connect(
  state => {
    return {
      products: state.products.products,
      isModal: state.ui.isModal
    }
  },
  dispatch => {
    return {
      toggleModal: () => dispatch(toggleModal()),
      selectProduct: (productId) => dispatch(selectProduct(productId))
    }
  }
)(Index)

export default Index
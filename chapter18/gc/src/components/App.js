import React from 'react'
import { fetchProducts } from '../actions'
import { connect } from 'react-redux'
import Modal from './Modal'

const Heading = () => {
  return <h1>Nile 서점</h1>
}

class App extends React.Component {
  constructor () {
    super()
  }

  componentDidMount () {
    fetch('/products.json')
      .then((response) => response.json())
      .then((products) => {
        this.props.doFetchProducts(products)
      })
  }

  componentDidUpdate () {
    // this.isModal = this.props.location.state && this.props.location.state.isModal
    // if (this.isModal &&
    //   this.props.location.key !== this.props.location.key) {
    //   this.previousChildren = this.props.children
    // }
  }

  render () {
    return (
      <div>
        <Heading />
        <div>
          {(this.props.isModal) ?
            <Modal isOpen={true}>
              {this.props.childern}
            </Modal>
            :
            ''
          }
        </div>
      </div>
    )
  }
}

App = connect(
  state => {
    return {
      isModal: state.ui.isModal
    }
  },
  dispatch => {
    return {
      doFetchProducts: (products) => dispatch(fetchProducts(products))
    }
  }
)(App)

export default App
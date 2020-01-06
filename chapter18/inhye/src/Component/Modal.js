import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Modal extends Component {
	constructor (props) {
    super(props)
    this.state = {
      product: {},
      selectedId: '',
    }
    this.handleBuy = this.handleBuy.bind(this)
    this.styles = {
      position: 'fixed',
      top: '20%',
      right: '20%',
      bottom: '20%',
      left: '20%',
      width: 450,
      height: 400,
      padding: 20,
      boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
      overflow: 'auto',
      background: '#FFF'
    }
  }

  handleBuy () {
    this.props.addToCart(this.state.selectedId)
  }

  componentDidMount() {
    var selectedId = this.props.match.params.id
    this.setState({ selectedId }, () => {
      this.props.getProduct().then((products) => {
        this.setState({ product: products[this.state.selectedId] })
      })
    })
  }

	render() {
    let { product, selectedId } = this.state
    let { returnTo } = this.props

		return (
      <div style={ this.styles }>
        <p>
          <Link to={ returnTo }>Back</Link>
        </p>
        <div style={{ padding: '20px' }}>
          <img src={ product.src }
               style={{ height: '80%' }} />
          <p>
            { product.title }
          </p>
          <Link
            to={{
              pathname: `/cart`,
              state: { productId: selectedId}
            }}
            onClick={ this.handleBuy }
            className="btn btn-primary">
            Buy
          </Link>
        </div>
      </div>
		)
	}
}

export default Modal

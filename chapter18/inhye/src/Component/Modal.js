import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Modal extends Component {
	constructor (props) {
    super(props)
    this.state = {
      product: {},
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

  handleBuy (event) {
    this.props.addToCart(this.props.match.params.id)
  }

  componentDidMount() {
    console.log('in modal', this)
    this.props.getProduct().then((products) => {
      this.setState({ product: products[this.props.match.params.id] })
    })
  }

	render() {
		return (
      <div style={this.styles}>
        <p>
          <Link to={this.props.returnTo}>Back</Link>
        </p>
        <div style={{ padding: '20px' }}>
          <img src={this.state.product.src} style={{ height: '80%' }} />
          <p>
            { this.state.product.title }
          </p>
          <Link
            to={{
              pathname: `/cart`,
              state: { productId: this.props.match.params.id}
            }}
            onClick={this.handleBuy}
            className="btn btn-primary">
            Buy
          </Link>
        </div>
      </div>
		)
	}
}

export default Modal

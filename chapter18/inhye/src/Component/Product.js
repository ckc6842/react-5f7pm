import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
    this.handleBuy = this.handleBuy.bind(this)
  }

  handleBuy (event) {
    this.props.addToCart(this.props.match.params.id)
  }

	render() {
    console.log(this)
		return (
      <div style={{ padding: '20px' }}>
        <img src={this.props.products[this.props.match.params.id].src} style={{ height: '80%' }} />
        <p>
          { this.props.products[this.props.match.params.id].title }
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
    )
	}
}

export default Product

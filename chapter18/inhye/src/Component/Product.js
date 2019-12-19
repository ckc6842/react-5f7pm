import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
    this.handleBuy = this.handleBuy.bind(this)
  }

  componentDidUpdate(nextProps) {
  }

  componentDidMount() {}

	render() {
		return (
      <div>
        <img src={this.props.route.products[this.props.params.id].src} style={{ height: '80%' }} />
        <p>
          { this.props.route.products[this.props.params.id].title }
        </p>
        <Link
          to={{
            pathname: `/cart`,
            state: { productId: this.props.params.id}
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

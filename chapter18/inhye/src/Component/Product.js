import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
	constructor (props) {
    super(props)
    this.state = {
      products: [],
    }
    this.handleBuy = this.handleBuy.bind(this)
  }

  handleBuy (event) {
    this.props.addToCart(this.props.match.params.id)
  }

  componentDidMount () {
    this.props.getProduct().then((products) => {
      this.setState({ products })
    })
  }
  
	render() {
    console.log(this)
    if (this.state.products && this.state.products.length === 0) return <></>
		return (
      <div style={{ padding: '20px' }}>
        <img src={this.state.products[this.props.match.params.id].src} style={{ height: '80%' }} />
        <p>
          { this.state.products[this.props.match.params.id].title }
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

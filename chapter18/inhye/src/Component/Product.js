import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
	constructor (props) {
    super(props)
    this.state = {
      products: [],
      selectedId: '',
    }
    this.handleBuy = this.handleBuy.bind(this)
  }

  handleBuy () {
    this.props.addToCart(this.state.selectedId)
  }

  componentDidMount () {
    var selectedId = this.props.match.params.id
    this.setState({ selectedId })
    this.props.getProduct().then((products) => {
      this.setState({ products })
    })
  }
  
	render() {
    if (this.state.products && this.state.products.length === 0) return <></>

    let { products, selectedId } = this.state
		return (
      <div style={{ padding: '20px' }}>
        <img src={ products[selectedId].src } style={{ height: '80%' }} />
        <p>
          { products[selectedId].title }
        </p>
        <Link
          to={{
            pathname: `/cart`,
            state: { productId: selectedId}
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

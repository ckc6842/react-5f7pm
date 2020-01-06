import React, { Component } from 'react'

class Checkout extends Component {
	constructor (props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  componentDidMount () {
    this.props.getProduct().then((products) => {
      this.setState({ products })
    })
  }

	render() {
    if (this.state.products && this.state.products.length === 0) return <></>
    let { cartItems } = this.props
    let { products } = this.state
		let count = 0
    return (
    <div style={{ padding: '20px' }}>
      <h1>Invoice</h1>
      <table className="table table-bordered">
        <tbody>
        {
          Object.keys(cartItems).map((item, index, list) => {
            count += cartItems[item]
            return <>
              <tr key={ item }>
                <td>
                  { products[item].title }
                </td>
                <td>
                  { cartItems[item] }
                </td>
              </tr>
            </>
          })
        }
        </tbody>
      </table>
      <p>
        <strong>
          Total: { count }
        </strong>
      </p>
    </div>
    )
	}
}

export default Checkout


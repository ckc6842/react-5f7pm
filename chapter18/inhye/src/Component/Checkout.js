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

		let count = 0
    return (
    <div style={{ padding: '20px' }}>
      <h1>Invoice</h1>
      <table className="table table-bordered">
        <tbody>
        {
          Object.keys(this.props.cartItems).map((item, index, list)=>{
            count += this.props.cartItems[item]
            return <>
              <tr key={item}>
                <td>
                  {this.state.products[item].title}
                </td>
                <td>
                  {this.props.cartItems[item]}
                </td>
              </tr>
            </>
          })
        }
        </tbody>
      </table>
      <p>
        <strong>
          Total: {count}
        </strong>
      </p>
    </div>
    )
	}
}

export default Checkout


import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Copy = () => {
  return <p>팝업에 대한 자세한 내용을 확인하려면 책을 클릭하세요. <br/>팝업의 링크를 복사하거나 붙여넣을 수 있습니다. 링크는 책에 대한 별도의 페이지로 안내됩니다.</p>
}

class Index extends Component {
	constructor (props) {
    super(props)
    this.state = {
      products: [],
    }
  }
  componentDidMount () {
    this.props.getProduct().then((products) => {
      this.setState({ products }, () => {
        console.log('this.propsthis.props', this)
      })
    })
  }

  componentDidUpdate() {
  }

	render() {
    if (this.state.products && this.state.products.length === 0) return <></>

		return (
      <div style={{ padding: '30px' }}>
        <Copy/>
        <p>
          <Link to="/cart" className="btn btn-danger">
            Cart
          </Link>
        </p>
        <div>
          {
            this.state.products.map((picture) => (
              <Link key={ picture.id }
                    to={
                      {
                        pathname: `/products/${picture.id}`,
                        state: {
                          modal: true,
                          returnTo: this.props.location.pathname
                        }
                      }
                    }>
                <img style={{ margin: 10 }} src={ picture.src } height="100" />
              </Link>
            ))
          }
        </div>
      </div>
		)
	}
}

export default Index

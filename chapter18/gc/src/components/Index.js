import React from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'

const Copy = () => {
  return <p>팝업에서 자세한 내용을 확인하려면 책을 클릭하세요.</p>
}

class Index extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Copy />
        <p>
          <Link to="/cart" className="btn btn-danger">Cart</Link>
        </p>
        <div>
          {this.props.products.map(picture => (
            <Link key={picture.id}
                  to={{pathname: `/products/${picture.id}`,
                      state: {isModal: true,
                      returnTo: this.props.location.pathname}
                    }
                  }>
              <img style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

Index = connect(
  state => {
    return {
      products: state.products
    }
  },
  undefined
)(Index)

export default Index
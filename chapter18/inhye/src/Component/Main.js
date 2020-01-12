import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Index from './Index.js'
import connectBookList from '../store/containers/bookList'

const Heading = () => {
  return (
    <>
      <h1>Inhye Book Store</h1>
      <hr/>
    </>
  )
}

const Copy = () => {
  return <p>팝업에 대한 자세한 내용을 확인하려면 책을 클릭하세요. <br/>팝업의 링크를 복사하거나 붙여넣을 수 있습니다. 링크는 책에 대한 별도의 페이지로 안내됩니다.</p>
}

class Main extends Component {
	constructor (props) {
    super(props)
    this.state = {
      products: [],
      isModal: false,
      previousChildren: {},
    }
  }

  componentDidUpdate(nextProps, prevState) {
    // if (nextProps !== prevState) {}
    // this.setState({
    //   isModal: nextProps.location.state && nextProps.location.state.modal
    // })
    // // this.isModal = (nextProps.location.state && nextProps.location.state.modal)
    // if (this.state.isModal && nextProps.location.key !== this.props.location.key) {
    //   this.setState({
    //     previousChildren: this.props.children
    //   })
    // }
  }

  componentDidMount () {
    //  FIXME: this.props.requestBookList() not working
    this.props.getProduct().then((products) => {
      this.setState({ products })
    })
  }

	render() {
    if (this.state.products && this.state.products.length === 0) return <></>
    let { location } = this.props
    let { products } = this.state
		return (
      <div className="main-layout" style={{ padding: '20px' }}>
        <Heading />
        <div style={{ padding: '30px' }}>
          <Copy/>
          <p>
            <Link to="/cart" className="btn btn-danger">
              Cart
            </Link>
          </p>
          <div>
            {
              products.map((picture) => (
                <Link key={ picture.id }
                      to={
                        {
                          pathname: `/product/${picture.id}`,
                          state: {
                            modal: true,
                            returnTo: location.pathname
                          }
                        }
                      }>
                  <img style={{ margin: 10 }} src={ picture.src } height="100" />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
		)
	}
}

export default connectBookList(Main)
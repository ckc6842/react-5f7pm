import React, { Component } from 'react'
import Index from './Index.js'
const Heading = () => {
  return (
    <>
      <h1>Inhye Book Store</h1>
      <hr/>
    </>
  )
}

class Main extends Component {
	constructor (props) {
    super(props)
    this.state = {
      products: [],
      isModal: false,
      previousChildren: {},
      location: {},
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
    this.setState({
      location: this.props.location,
    })
    this.props.getProduct().then((products) => {
      this.setState({ products })
    })
  }

	render() {
		return (
      <div className="main-layout" style={{ padding: '20px' }}>
        <Heading />
        <Index {...this.state} />
      </div>
		)
	}
}

export default Main

import React, { Component } from 'react'
import Modal from './Modal.js'
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
      isModal: false,
      previousChildren: {},
    }
  }

  componentDidUpdate(nextProps, prevState) {
    console.log('nextProps', prevState)
    this.setState({
      isModal: nextProps.location.state && nextProps.location.state.modal
    })
    // this.isModal = (nextProps.location.state && nextProps.location.state.modal)
    if (this.state.isModal && nextProps.location.key !== this.props.location.key) {
      this.setState({
        previousChildren: this.props.children
      })
    }
  }

  componentDidMount() {
  }

	render() {
		return (
      <div className="main-layout" style={{ padding: '20px' }}>
        <Heading/>
      </div>
		)
	}
}

export default Main

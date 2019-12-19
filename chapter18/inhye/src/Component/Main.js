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
    }
  }

  componentDidUpdate(nextProps) {
    this.isModal = (nextProps.location.state && nextProps.location.state.modal)
    if (this.isModal && nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }

  componentDidMount() {}

	render() {
		return (
      <div className="main-layout" style={{ padding: '20px' }}>
        <Heading/>
        <div>
          {
            this.isModal
            ? this.previousChildren
            : this.props.children
          }
          {/* {this.props.children} */}
          {
            this.isModal
            ? (
              <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
                {this.props.children}
              </Modal>
            )
            : ''
          }
        </div>
      </div>
		)
	}
}

export default Main

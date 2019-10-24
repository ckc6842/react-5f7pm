import React, { Component } from 'react'

class Button extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
    this.startTime = this.startTime.bind(this)
  }

  startTime (e) {
    return this.props.startTimer(this.props.time)
  }

	render() {
		return (
      <button type="button"
              className="btn-default btn"
              onClick={this.startTime}>
        {this.props.time} seconds
      </button>
		)
	}
}

export default Button
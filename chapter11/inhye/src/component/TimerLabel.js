import React, { Component } from 'react'

class TimerLabel extends Component {
	constructor (props) {
    super(props)
    this.renderTimeLeft = this.renderTimeLeft.bind(this)
  }
  renderTimeLeft () {
    if (this.props.timeLeft === null || this.props.timeLeft === 0) return <div/>
    return (
      <h1>
        Time Left: {this.props.timeLeft}
      </h1>
    )
  }

	render() {
		return this.renderTimeLeft()
	}
}

export default TimerLabel
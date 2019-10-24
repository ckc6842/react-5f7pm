import React, { Component } from 'react'

class Timer extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
  }

	render() {
    if (this.props.timeLeft === 0) {
      document.getElementById('end-of-time').play()
    }
    if (this.props.timeLeft === null || this.props.timeLeft === 0) {
      return <div />
    }
		return (
      <h1>
        Time Left: {this.props.timeLeft}
      </h1>
    )
	}
}

export default Timer
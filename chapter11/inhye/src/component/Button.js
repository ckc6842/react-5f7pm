import React, { Component } from 'react'

class Button extends Component {
	constructor (props) {
    super(props)
    this.state = {
      status: 'Pause',
      timeLeft: null,
    }
    this.startTime = this.startTime.bind(this)
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onClickChange = this.onClickChange.bind(this)
  }

  startTime () {
    return this.props.startTimer(this.props.time)
  }

  onChangeStatus () {
    if (this.props.timeLeft > 0) {
      this.setState({
        status: 'Pause',
      })
    }
    return this.props.timeLeft
  }

  onClickChange () {
    if (this.props.timeLeft > 0) {
      this.setState({
        status: 'Restart',
        timeLeft: this.props.timeLeft,
      })
      this.props.pauseTime()
    }
    if (this.state.status === 'Restart') {
      this.props.startTimer(this.state.timeLeft)
    }
  }

  componentDidUpdate (prevProp) {
    if (prevProp.timeLeft !== this.props.timeLeft) {
      this.onChangeStatus()
    }
  }

	render() {
		return (
      <button type="button"
              className="btn-default btn"
              // just button이면 this.startTime
              // change button이면 this.onClickChange
              onClick={this.props.defaultButton ? this.startTime : this.onClickChange}>
        {this.props.defaultButton ? `${this.props.time} seconds` : this.state.status}
      </button>
		)
	}
}

export default Button

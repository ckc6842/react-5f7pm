import React, { Component } from 'react'

class ChangeButton extends Component {
	constructor (props) {
    super(props)
    this.state = {
      status: 'Pause',
      timeLeft: null,
    }
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onClickChange = this.onClickChange.bind(this)
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
              className="btn-primary btn"
              onClick={this.onClickChange}>
        {this.state.status}
      </button>
		)
	}
}

export default ChangeButton
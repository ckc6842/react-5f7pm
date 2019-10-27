import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
	constructor (props) {
    super(props)
    this.state = {
      status: 'Pause',
    }
    this.stopTimer = this.stopTimer.bind(this)
    this.restartTimer = this.restartTimer.bind(this)
    this.onClickButton = this.onClickButton.bind(this)
    this.renderText = this.renderText.bind(this)
  }

  onClickButton () {
    if (this.props.buttonType === 'timer') {
      return this.props.startTimer(this.props.time)
    }
    if (this.props.buttonType === 'status') {
      return this.restartTimer()
    }
    if (this.props.buttonType === 'cancel') {
      return this.props.cancelTimer()
    }
  }

  restartTimer () {
    if (this.props.timeLeft > 0) {
      this.setState({status: 'Restart'})
      this.props.pauseTimer()
    }
    if (this.state.status === 'Restart') {
      this.props.startTimer(this.props.timeLeft)
    }
  }

  stopTimer () {
    if (this.props.timeLeft > 0) {
      this.setState({status: 'Pause'})
    }
  }

  renderText () {
    if (this.props.buttonType === 'timer') {
      return `${this.props.time} seconds`
    }
    if (this.props.buttonType === 'status') {
      return this.state.status
    }
    if (this.props.buttonType === 'cancel') {
      return 'cancel'
    }
  }
  componentDidUpdate (prevProp) {
    if (prevProp.timeLeft !== this.props.timeLeft) {
      this.stopTimer()
    }
  }

	render() {
		return (
      <button type="button"
              className="btn-default btn"
              onClick={this.onClickButton}>
        {this.renderText()}
      </button>
		)
	}
}

export default Button
Button.propTypes = {
  buttonType: PropTypes.oneOf(['timer', 'status', 'cancel']),
}

Button.defaultProps = {
  defaultButton: 'timer',
}
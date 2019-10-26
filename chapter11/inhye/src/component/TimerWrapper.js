import React, { Component } from 'react'
import Button from './Button'
import Timer from './Timer'
import PropTypes from 'prop-types'

class TimerWrapper extends Component {
	constructor (props) {
    super(props)
    this.state = {
      timeLeft: null,
      timer: null,
    }
    this.startTimer = this.startTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.cancelTimer = this.cancelTimer.bind(this)
    this.renderChangeButton = this.renderChangeButton.bind(this)
  }

  renderChangeButton () {
    if (this.state.timeLeft === null) return
    return (
      <div>
        <Button buttonType="status"
                timeLeft={this.state.timeLeft}
                pauseTimer={this.pauseTimer}
                startTimer={this.startTimer} />
      <Button buttonType="cancel" cancelTimer={this.cancelTimer}></Button>
      </div>
    )
  }

  startTimer (timeLeft) {
    this.pauseTimer()
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      //  남은 시간이 0일때 clear
      if (timeLeft === 0) clearInterval(timer)
      this.setState({ timeLeft: timeLeft })
    }, 1000)
    return this.setState({ timeLeft: timeLeft, timer: timer })
  }

  pauseTimer () {
    clearInterval(this.state.timer)
  }

  cancelTimer () {
    this.pauseTimer()
    this.setState({
      timer: null,
      timeLeft: null,
    })
  }

  componentDidUpdate () {
    if (this.state.timeLeft === 0) {
      document.getElementById('end-of-time').play()
    }
  }

	render() {
		return (
      <div className="row-fluid">
        <h2>Timer~~</h2>
        {this.renderChangeButton()}
        <div className="btn-group" role="group">
          <Button buttonType="timer" time="5" startTimer={this.startTimer} />
          <Button buttonType="timer" time="10" startTimer={this.startTimer} />
          <Button buttonType="timer" time="15" startTimer={this.startTimer} />
        </div>
        <Timer timeLeft={this.state.timeLeft} />
        <audio id="end-of-time" src="/flute_c_long_01.wav" preload="auto"></audio>
      </div>
		)
	}
}

export default TimerWrapper
Button.propTypes = {
  buttonType: PropTypes.oneOf(['timer', 'status', 'cancel']),
}

Button.defaultProps = {
  defaultButton: 'timer',
}
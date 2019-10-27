import React, { Component } from 'react'
import TimerButton from './TimerButton'
import TimerLabel from './TimerLabel'
import TimerSound from './TimerSound'
import TimerSlider from './TimerSlider'
class TimerWrapper extends Component {
	constructor (props) {
    super(props)
    this.state = {
      timeLeft: null,
      timer: null,
      time: 0,
    }
    this.startTimer = this.startTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.cancelTimer = this.cancelTimer.bind(this)
    this.renderChangeButton = this.renderChangeButton.bind(this)
  }

  renderChangeButton () {
    if (this.state.timeLeft === null || this.state.timeLeft === 0) return
    return (
      <div>
        <TimerButton buttonType="status"
                timeLeft={this.state.timeLeft}
                pauseTimer={this.pauseTimer}
                startTimer={this.startTimer} />
        <TimerButton buttonType="cancel" cancelTimer={this.cancelTimer} />
      </div>
    )
  }

  startTimer (timeLeft) {
    this.pauseTimer()
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft === 0) {
        this.cancelTimer()
        clearInterval(timer)
      }
      this.setState({ timeLeft: timeLeft })
    }, 1000)
    this.setState({ timeLeft: timeLeft, timer: timer })
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
          <TimerButton buttonType="timer" time={5} startTimer={this.startTimer} />
          <TimerButton buttonType="timer" time={10} startTimer={this.startTimer} />
          <TimerButton buttonType="timer" time={15} startTimer={this.startTimer} />
        </div>
        <TimerLabel timeLeft={this.state.timeLeft} />
        <TimerSlider timeLeft={this.state.timeLeft} />
        <TimerSound timeLeft={this.state.timeLeft} />
      </div>
		)
	}
}

export default TimerWrapper
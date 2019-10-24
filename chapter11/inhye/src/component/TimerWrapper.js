import React, { Component } from 'react'
import Button from './Button'

class TimerWrapper extends Component {
	constructor (props) {
    super(props)
    this.state = {
      timeLeft: null,
      timer: null,
    }
    this.startTimer = this.startTimer.bind(this)
  }

  startTimer (timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      //  남은 시간이 0일때 clear
      if (timeLeft === 0) clearInterval(timer)
      this.setState({ timeLeft: timeLeft })
    }, 1000)
    return this.setState({ timeLeft: timeLeft, timer: timer })
  }

	render() {
		return (
      <div className="row-fluid">
        <h2>Timer~~</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer} />
          <Button time="10" startTimer={this.startTimer} />
          <Button time="15" startTimer={this.startTimer} />
        </div>
      </div>
		)
	}
}

export default TimerWrapper
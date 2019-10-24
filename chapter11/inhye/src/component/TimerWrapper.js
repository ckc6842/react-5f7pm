import React, { Component } from 'react'
import Button from './Button'
import Timer from './Timer'
import ChangeButton from './ChangeButton'
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
        <div>
          {/* TODO: 최초 로딩에 hide */}
          <ChangeButton timeLeft={this.state.timeLeft}/>
        </div>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer} />
          <Button time="10" startTimer={this.startTimer} />
          <Button time="15" startTimer={this.startTimer} />
        </div>
        <Timer timeLeft={this.state.timeLeft} />
        <audio id="end-of-time" src="/flute_c_long_01.wav" preload="auto"></audio>
      </div>
		)
	}
}

export default TimerWrapper
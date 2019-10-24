import React, { Component } from 'react'
import Button from './Button'
import Timer from './Timer'

export default class TimerWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timeLeft: null,
      timer: null,
    }
  }

  startTimer = (timeLeft) => {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      console.log('2: Inside of setInterval')
      const timeLeft = this.state.timeLeft - 1
      if (timeLeft === 0) {
        clearInterval(this.state.timer)
      }

      this.setState({
        timeLeft: timeLeft
      })
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({
      timeLeft: timeLeft,
      timer: timer
    })
  }

  render () {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer} />
          <Button time="10" startTimer={this.startTimer} />
          <Button time="15" startTimer={this.startTimer} />
        </div>
        <Timer timeLeft={this.state.timeLeft} />
        <audio id="end-of-time" src="/flute.wav" preload="auto"></audio>
      </div>
    )
  }
}
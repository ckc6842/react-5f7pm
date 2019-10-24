import React, { Component } from 'react'
import TimerButton from './TimerButton'
import TimerLabel from './TimerLabel'
import TimerSound from './TimerSound'

// TimerWrapper
class Timer extends Component {
  constructor (props) {
    super(props)
    this.setTimer = this.setTimer.bind(this)
    this.playAlarm = this.playAlarm.bind(this)
    this.clearTimer = this.clearTimer.bind(this)

    this.state = {
      time: 0,
      timer: null,
      alarm: false,
    }
  }

  render () {
    const { time, alarm } = this.state
    return (
      <>
        <h1>Timer</h1>
        <div>
          {/* time과 unit을 props로 넘겨줄지, 그냥 초로 통일할지 고민하다 그냥 초로 했습니다. */}
          <TimerButton onClick={ () => this.setTimer(5 * 60) }>5 min</TimerButton>
          <TimerButton onClick={ () => this.setTimer(10 * 60) }>10 min</TimerButton>
          <TimerButton onClick={ () => this.setTimer(15 * 60) }>15 min</TimerButton>
        </div>
        <TimerLabel time={ time } />
        <TimerSound turnOn={ alarm } />
      </>
    )
  }

  setTimer (time) {
    clearInterval(this.state.timer)
    const timer = setInterval(() => {
      if (this.state.time <= 0) {
        this.playAlarm()
        this.clearTimer()
        return
      }
      this.setState((state) => ({ time: state.time - 1 }))
    }, 1000)
    this.setState({ time, timer })
  }

  clearTimer () {
    clearInterval(this.state.timer)
    this.setState({ time: 0, timer: null })
  }

  playAlarm () {
    setTimeout(() => {
      this.setState({ alarm: false })
    }, 900)
    this.setState({ alarm: true })
  }
}

export default Timer

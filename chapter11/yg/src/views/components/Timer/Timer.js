import React, { Component } from 'react'
import TimerButton from './TimerButton'
import TimerLabel from './TimerLabel'
import TimerSlider from './TimerSlider'
import TimerSound from './TimerSound'

// TimerWrapper
class Timer extends Component {
  constructor (props) {
    super(props)
    this.setTimer = this.setTimer.bind(this)
    this.onChangeSlider = this.onChangeSlider.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
    this.toggleTimer = this.toggleTimer.bind(this)
    this.playAlarm = this.playAlarm.bind(this)

    this.state = {
      time: 0,
      maxTime: 0,
      timer: null,
      pause: false,
      alarm: false,
    }
  }

  render () {
    const { time, timer, maxTime, pause, alarm } = this.state
    return (
      <>
        <h1>Timer</h1>
        <div>
          {/* time과 unit을 props로 넘겨줄지, 그냥 초로 통일할지 고민하다 그냥 초로 했습니다. */}
          <TimerButton onClick={ () => this.setTimer(5 * 60) }>5 min</TimerButton>
          <TimerButton onClick={ () => this.setTimer(10 * 60) }>10 min</TimerButton>
          <TimerButton onClick={ () => this.setTimer(15 * 60) }>15 min</TimerButton>
        </div>
        <div>
          <TimerButton onClick={ this.toggleTimer } disabled={ timer === null }>
            { pause ? 'Play' : 'Pause' }
          </TimerButton>
          <TimerButton onClick={ this.clearTimer } disabled={ timer === null }>Stop</TimerButton>
        </div>
        <TimerLabel time={ time } />
        <TimerSound turnOn={ alarm } />
        <TimerSlider onChange={ this.onChangeSlider } max={ maxTime } value={ time } disabled={ timer === null } />
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
      if (!this.state.pause) {
        this.setState((state) => ({ time: state.time - 1 }))
      }
    }, 1000)

    this.setState({
      time,
      timer,
      maxTime: time,
    })
  }

  onChangeSlider (e) {
    this.setState({ time: e.target.value })
  }

  clearTimer () {
    clearInterval(this.state.timer)
    this.setState({
      time: 0,
      timer: null,
      maxTime: 0,
      pause: false,
    })
  }

  toggleTimer () {
    this.setState((state) => ({ pause: !state.pause }))
  }

  playAlarm () {
    setTimeout(() => {
      this.setState({ alarm: false })
    }, 900)
    this.setState({ alarm: true })
  }
}

export default Timer

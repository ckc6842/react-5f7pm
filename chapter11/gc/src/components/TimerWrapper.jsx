import React, { Component } from 'react'
import TimerButton from './TimerButton'
import TimerLabel from './TimerLabel'
import TimerSound from './TimerSound'
import TimerSlider from './TimerSlider'

const timeUnits = [
  {
    label: 'seconds',
    timeMultiplier: 1
  },
  {
    label: 'minutes',
    timeMultiplier: 60
  }
]

const times = [5, 10, 15]

export default class TimerWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timeLeft: null,
      timeUnit: 0,
      timer: null,
      isPlaying: true,
      selectedTimespan: null
    }
  }

  startTimer = (timeLeft) => {
    timeLeft *= timeUnits[this.state.timeUnit].timeMultiplier
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      if (this.state.isPlaying === false) return
      const timeLeft = this.state.timeLeft - 1
      if (timeLeft === 0) {
        clearInterval(this.state.timer)
      }

      this.setState({
        timeLeft: timeLeft
      })
    }, 1000)
    
    return this.setState({
      timeLeft: timeLeft,
      selectedTimespan: timeLeft,
      timer: timer
    })
  }

  togglePlay = () => {
    return this.setState({
      isPlaying: !this.state.isPlaying
    })
  }

  stopTimer = () => {
    clearInterval(this.state.timer)
    return this.setState({
      timeLeft: null,
      selectedTimespan: null,
      timer: null
    })
  }

  resetTimer = () => {
    return this.setState({
      timeLeft: this.state.selectedTimespan,
    })
  }

  changeTimeUnit = () => {
    return this.setState({
      timeUnit: (this.state.timeUnit + 1) % 2,
    })
  }

  setTimer = (e) => {
    return this.setState({
      timeLeft: parseInt(e.target.value)
    })
  }

  render () {
    var currentTimeUnit = timeUnits[this.state.timeUnit].label
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          {times.map(time => (
            <TimerButton time={time} postfix={currentTimeUnit} onClick={this.startTimer} />
          ))}
        </div>
        <hr/>
        <div className="btn-group" role="group">
          <TimerButton postfix="toggle" onClick={this.togglePlay} />
          <TimerButton postfix="stop" onClick={this.stopTimer} />
          <TimerButton postfix="reset" onClick={this.resetTimer} />
          <TimerButton postfix={currentTimeUnit} onClick={this.changeTimeUnit} />
        </div>
        <hr/>
        <TimerLabel timeLeft={this.state.timeLeft} />
        <TimerSlider max={this.state.selectedTimespan}
                     timeLeft={this.state.timeLeft}
                     onChange={this.setTimer} />
        <TimerSound timeLeft={this.state.timeLeft} />
      </div>
    )
  }
}
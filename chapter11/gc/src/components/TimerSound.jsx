import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TimerSound extends Component {
  componentDidUpdate () {
    if (this.props.timeLeft === 0) {
      this.play()
    }
  }
  play = () => {
    this.refs.sound.play()
  }

  render () {
    return (
      <audio ref="sound" id="end-of-time" src="/flute.wav" preload="auto"></audio>
    )
  }
}

TimerSound.propTypes = {
  timeLeft: PropTypes.number
}
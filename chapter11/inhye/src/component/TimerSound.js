import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TimerSound extends Component {

  componentDidUpdate () {
    if (this.props.timeLeft === 0) {
      document.getElementById('end-of-time').play()
    }
  }

	render() {
		return <audio id="end-of-time" src="/flute_c_long_01.wav" preload="auto"></audio>
	}
}

export default TimerSound
TimerSound.propTypes = {
  timeLeft: PropTypes.number,
}

TimerSound.defaultProps = {
  timeLeft: '5',
}
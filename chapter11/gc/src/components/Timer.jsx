import React from 'react'
import PropTypes from 'prop-types'

const Timer = (props) => {
  if (props.timeLeft === 0) {
    document.getElementById('end-of-time').play()
  }

  if (props.timeLeft === null || props.timeLeft === 0) return <div />

  return (
    <h1>Time left: {props.timeLeft}</h1>
  )
}

Timer.propTypes = {
  timeLeft: PropTypes.number
}

export default Timer

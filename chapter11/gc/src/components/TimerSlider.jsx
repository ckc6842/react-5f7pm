import React from 'react'
import PropTypes from 'prop-types'

const TimerSlider = (props) => {
  if (props.timeLeft === null || props.timeLeft === 0) return <div />

  return (
    <input type="range"
           min="0" max={props.max ? props.max : 0}
           value={props.timeLeft ? props.timeLeft : 0}
           onChange={props.onChange}></input>
  )
}

TimerSlider.propTypes = {
  max: PropTypes.number,
  timeLeft: PropTypes.number,
  onChange: PropTypes.func
}

export default TimerSlider

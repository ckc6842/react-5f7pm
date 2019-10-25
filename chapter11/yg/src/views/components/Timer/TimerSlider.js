import React from 'react'

const TimerSlider = (props) => {
  // const { value, max, onChange, disabled,  } = props
  return (
    <div>
      <input type="range" min="0" { ...props } />
    </div>
  )
}

export default TimerSlider

import React from 'react'

const TimerButton = (props) => {
  const { onClick, disabled, children } = props
  return <button onClick={ onClick } disabled={ disabled } >{ children }</button>
}

export default TimerButton

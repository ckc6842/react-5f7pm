import React from 'react'

const TimerButton = (props) => {
  const { onClick, children } = props
  return <button onClick={ onClick }>{ children }</button>
}

export default TimerButton

import React from 'react'

const TimerSound = (props) => {
  // turnOn을 갱신하여 audio를 렌더링
  return props.turnOn
    ? (
      <audio autoPlay>
        <source src="resources/alarm.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    )
    : <></>
}

export default TimerSound

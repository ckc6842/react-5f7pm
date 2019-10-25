import React from 'react';

const TimeSlider = (props) => {
    if (props.timeLeft === null || props.timeLeft === 0)
        return <div/>
    return <input type="range" min="0" max={props.timerDuration} value={props.timeLeft} readOnly/>
}

export default TimeSlider;
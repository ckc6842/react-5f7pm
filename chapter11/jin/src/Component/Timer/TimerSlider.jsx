import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TimerSlider extends Component {

    constructor (props) {
        super(props)
    }

    buildSliderValue () {
        if (this.props.timeLeft === 0) {
            return 100;
        }

        if (this.props.timeStarted === 0) {
            return 0;
        }

        return this.props.timeStarted - this.props.timeLeft
    }

    render () {
        return <input type="range" min="0" max={this.props.timeStarted} value={this.buildSliderValue()}>
        </input>
    }

}

TimerSlider.defaultProps = {
    timeLeft: 0,
    timeStarted: 1
}

TimerSlider.propTypes = {
    timeLeft: PropTypes.number,
    timeStarted: PropTypes.number
}

export default TimerSlider

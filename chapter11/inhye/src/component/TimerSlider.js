import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TimerSlider extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
  }
	render() {
		return (
      <div>
        <input id="input-range"
               type="range"
               min="0"
               max={this.props.timeLeft}
               value={this.props.timeLeft ? this.props.timeLeft : 0}
               disabled></input>
      </div>
    )
	}
}

export default TimerSlider
TimerSlider.propTypes = {
  timeLeft: PropTypes.number,
}

TimerSlider.defaultProps = {
  timeLeft: 0,
}
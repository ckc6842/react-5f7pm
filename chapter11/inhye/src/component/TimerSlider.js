import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TimerSlider extends Component {
	constructor (props) {
    super(props)
    this.state = {
      maxValue: 0,
    }
    this.onChangeSlider = this.onChangeSlider.bind(this)
  }
  onChangeSlider (e) {
    console.log(e.target.value)
  }
  componentDidUpdate(prevProps) {
    // if (prevProps) {
    //   this.setState({maxValue: this.props.timeLeft})
    // }
  }
	render() {
    if (this.props.timeLeft === null || this.props.timeLeft === 0) return <div />
		return (
      <div>
        <input id="input-range"
               type="range"
               min="0"
               max={this.state.maxValue}
               defaultValue={this.props.timeLeft ? this.props.timeLeft : 0}
               onChange={this.onChangeSlider}></input>
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
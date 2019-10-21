import React, { Component } from 'react'
import Tooltip from './Tooltip'
import PropTypes from 'prop-types'

Tooltip.propTypes = {
  isClickToggle: PropTypes.bool,
  isMouseToggle: PropTypes.bool,
  tooltipPosition: PropTypes.oneOf(['bottom', 'top']),
}

class Main extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {}

	render() {
		return (
      <div>
        <Tooltip text="click click"
                 isClickToggle={true}>
          Click
        </Tooltip>
        <Tooltip text="mouse mouse"
                 isMouseToggle={true}>
          Mouse
        </Tooltip>
        <Tooltip text="mouse mouse"
                 isMouseToggle={true}
                 tooltipPosition='top'>
          Up
        </Tooltip>
        <Tooltip text="mouse mouse"
                 isMouseToggle={true}
                 tooltipPosition='bottom'>
          Down
        </Tooltip>
      </div>
		)
	}
}

export default Main

Tooltip.defaultProps = {
  isClickToggle: false,
  isMouseToggle: false,
  tooltipPosition: 'bottom',
}
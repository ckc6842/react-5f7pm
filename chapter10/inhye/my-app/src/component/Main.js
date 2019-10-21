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
                 isClickToggle={true}
                 isMouseToggle={false}
                  >
          Click
        </Tooltip>
        <Tooltip text="mouse mouse"
                 isClickToggle={false}
                 isMouseToggle={true}>
          Mouse
        </Tooltip>
      </div>
		)
	}
}

export default Main

Tooltip.defaultProps = {
  isClickToggle: false,
  isMouseToggle: true,
  tooltipPosition: 'bottom',
}
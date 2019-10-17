import React, { Component } from 'react'
import Tooltip from './Tooltip'
import PropTypes from 'prop-types'
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
                 allowToggleWithClick={true}
                 allowToggleWithMouseInteraction={false}
                  >
          Click
        </Tooltip>
        <Tooltip text="mouse mouse"
                 allowToggleWithClick={false}
                 allowToggleWithMouseInteraction={true}>
          Mouse
        </Tooltip>
      </div>
		)
	}
}

export default Main

Tooltip.propTypes = {
  allowToggleWithClick: PropTypes.bool,
  allowToggleWithMouseInteraction: PropTypes.bool,
  positionWhereShowText: PropTypes.oneOf(['bottom', 'top']),

}

Tooltip.defaultProps = {
  allowToggleWithClick: false,
  allowToggleWithMouseInteraction: true,
  positionWhereShowText: 'bottom',
}
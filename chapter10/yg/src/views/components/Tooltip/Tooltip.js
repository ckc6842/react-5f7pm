import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { DIRECTION } from './const'

import './Tooltip.css'

const propTypes = {
  text: PropTypes.string,
  click: PropTypes.bool,
  hover: PropTypes.bool,
  direction: PropTypes.oneOf(Object.values(DIRECTION)),
}

const defaultProps = {
  text: '',
  direction: DIRECTION.DOWN,
}

class Tooltip extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showTooltip: false,
      tooltipStyle: {},
    }
    this.toggle = this.toggle.bind(this)
    this.makeTooltipStyle = this.makeTooltipStyle.bind(this)
  }
  
  render () {
    const { text, children, click, hover } = this.props
    const { showTooltip, tooltipStyle } = this.state
    console.log(click, hover)
    return (
      <>
        <span onClick={ click ? this.toggle : undefined }
              onMouseEnter={ hover ? this.toggle : undefined }
              onMouseOut={ hover ? this.toggle : undefined }>
          <strong>{ children }</strong>
        </span>
        <div className='tooltip-box'
             hidden={ !showTooltip }
             style={ tooltipStyle }
             role='tooltip'>
          { text }
        </div>
      </>
    )
  }

  toggle () {
    this.setState((state) => ({
      showTooltip: !state.showTooltip,
      tooltipStyle: this.makeTooltipStyle(!state.showTooltip),
    }))

  }

  makeTooltipStyle () {
    const { direction } = this.props
    const { offsetTop: top, offsetLeft: left } = ReactDOM.findDOMNode(this)
    return {
      top,
      left,
      marginTop: direction === DIRECTION.UP ? -40 : 30,
      marginRight: 10,
    }
  }
}

Tooltip.propTypes = propTypes
Tooltip.defaultProps = defaultProps

export default Tooltip

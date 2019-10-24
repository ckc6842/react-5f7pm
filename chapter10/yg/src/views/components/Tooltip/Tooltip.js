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
    this.onClickTooltip = this.onClickTooltip.bind(this)
    this.onHoverTooltip = this.onHoverTooltip.bind(this)
    this.makeTooltipStyle = this.makeTooltipStyle.bind(this)
    
  }
  
  render () {
    const { text, children, click, hover, direction } = this.props
    const { showTooltip, tooltipStyle } = this.state

    return (
      <>
        <span onClick={ this.onClickTooltip }
              onMouseEnter={ this.onHoverTooltip }
              onMouseOut={ this.onHoverTooltip }>
          <strong>{ children }</strong>
        </span>
        {/* className() 쓰면 더 깔끔할 것 같습니다. */}
        <div className={`tooltip-box tooltip-box-${ direction.toLowerCase() }`}
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

  onClickTooltip () {
    if (this.props.click) {
      this.toggle()
    }
  }

  onHoverTooltip () {
    if (this.props.hover) {
      this.toggle()
    }
  }

  makeTooltipStyle () {
    const { direction } = this.props
    const { offsetTop: top, offsetLeft: left } = ReactDOM.findDOMNode(this)
    return {
      top,
      left,
    }
  }
}

Tooltip.propTypes = propTypes
Tooltip.defaultProps = defaultProps

export default Tooltip

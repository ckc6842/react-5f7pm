import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Tooltip.css'

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
    const { text, children } = this.props
    const { showTooltip, tooltipStyle } = this.state
    
    return (
      <>
        <span onMouseEnter={ this.toggle }
              onMouseOut={ this.toggle }>
          <strong>{ children }</strong>
        </span>
        <div className='tooltip-box'
             hidden={ !showTooltip }
             style={ tooltipStyle }>
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
    const { offsetTop: top, offsetLeft: left } = ReactDOM.findDOMNode(this)
    return {
      top: top,
      left: left,
    }
  }
}

export default Tooltip

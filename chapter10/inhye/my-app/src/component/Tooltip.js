import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Tooltip extends Component {
	constructor (props) {
    super(props)
    this.state = {
      opacity: false,
    }
    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseInteraction = this.handleMouseInteraction.bind(this)
  }

  handleClick() {
    if (!this.props.allowToggleWithClick) {
      return false
    }
    this.toggle()
  }

  handleMouseInteraction() {
    if (!this.props.allowToggleWithMouseInteraction) {
      return false
    }
    this.toggle()
  }

  toggle () {
    // const { offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this)
    const tooltipNode = ReactDOM.findDOMNode(this)
    this.setState(
      {
        opacity: !this.state.opacity,
        top: tooltipNode.offsetTop,
        left: tooltipNode.offsetLeft,
      }
    )
  }

	render() {
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) +20,
      left: (this.state.left || 0) -30,
    }
		return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue', cursor: 'pointer'}}
              onClick={ this.handleClick }
              onMouseEnter={ this.handleMouseInteraction }
              onMouseOut={ this.handleMouseInteraction } >
          { this.props.children }
        </span>
        <div className="tooltip-bottom"
            style={style}
            role="tooltip">
              <div className="arrow"></div>
              <div className="tooltip-inner">
                { this.props.text }
              </div>
        </div>
      </div>
		)
	}
}

export default Tooltip
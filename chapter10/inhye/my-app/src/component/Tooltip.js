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
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleClick() {
    if (!this.props.isClickToggle) {
      return false
    }
    this.toggle()
  }

  handleMouseOver() {
    if (!this.props.isMouseToggle) {
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
    const top = this.state.top || 0
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: top + (this.props.tooltipPosition === 'bottom' ? +20 : -20),
      left: (this.state.left || 0) -30,
    }

		return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue', cursor: 'pointer'}}
              onClick={ this.handleClick }
              onMouseEnter={ this.handleMouseOver }
              onMouseOut={ this.handleMouseOver } >
          { this.props.children }
        </span>
        <div className={`tooltip ${this.props.tooltipPosition}`} 
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
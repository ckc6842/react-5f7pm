import React from 'react';
import ReactDOM from 'react-dom'
import CONST from './CONST'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: false
    }
  }

  toggle () {
    const { offsetTop, offsetLeft } = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity,
      top: offsetTop,
      left: offsetLeft
    })
  }

  handleOver = (e) => {
    if (this.props.method !== CONST.METHOD.OVER) return
    this.toggle()
  }

  handleClick = (e) => {
    if (this.props.method !== CONST.METHOD.CLICK) return
    this.toggle()
  }

  getStyle = (e) => {
    return {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: this.props.position === CONST.POSITION.BOTTOM ? (this.state.top || 0) + 20 : 10,
      left: (this.state.left || 0) + 30
    }
  }

  getTooltipClass = (e) => {
    return 'tooltip bs-tooltip-' + this.props.position
  }

  render () {
    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}}
          onMouseEnter={this.handleOver}
          onMouseLeave={this.handleOver}
          onClick={this.handleClick}>
          {this.props.children}
        </span>
        <div className={this.getTooltipClass()}
          style={this.getStyle()}
          role="tooltip">
          <div className="arrow"></div>
          <div className="tooltip-inner">
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}
import React from 'react';
import ReactDOM from 'react-dom'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: false
    }
  }

  toggle = (e) => {
    const { offsetTop, offsetLeft } = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity,
      top: offsetTop,
      left: offsetLeft
    })
  }

  getStyle = (e) => {
    return {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      // opacity: 1,
      opacity: +this.state.opacity,
      top: this.props.position === 'bottom' ? (this.state.top || 0) + 20 : 10,
      left: (this.state.left || 0) + 30
    }
  }

  getTooltipClass = (e) => {
    console.log('tooltip bs-tooltip-' + this.props.position)
    return 'tooltip bs-tooltip-' + this.props.position
  }

  render () {
    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}}
          onMouseEnter={this.toggle}
          onMouseLeave={this.toggle}>
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
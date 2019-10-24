import React, { Component } from 'react'

export default class Button extends Component {
  onClickButton = (e) => {
    return this.props.startTimer(this.props.time)
  }

  render () {
    return (
      <button type="button" className="btn btn-primary" onClick={this.onClickButton}>
        {this.props.time} seconds
      </button>
    )
  }
}
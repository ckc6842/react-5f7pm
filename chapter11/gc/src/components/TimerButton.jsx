import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TimerButton extends Component {
  onClickButton = (e) => {
    return this.props.onClick(this.props.time)
  }

  render () {
    return (
      <button type="button" className="btn btn-primary" onClick={this.onClickButton}>
        {this.props.time} {this.props.postfix}
      </button>
    )
  }
}

TimerButton.propTypes = {
  time: PropTypes.number,
  postfix: PropTypes.string,
  onClick: PropTypes.func
}
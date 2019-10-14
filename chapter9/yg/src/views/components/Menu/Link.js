import React, { Component } from 'react'

class Link extends Component {
  render () {
    return (
      <a href={this.props.href}>{this.props.title}</a>
    )
  }
}

export default Link

import React from 'react'

export default class Link extends React.Component {
  render () {
    const url = '/' +
      this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return (
      <div>
        <a href={url}>
          {this.props.label}
        </a>
        <br/>
      </div>
    )
  }
}
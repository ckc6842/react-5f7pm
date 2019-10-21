import React from 'react'

export default class TooltipOptions extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <select onChange={this.props.handleOption}>
        {this.props.options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    )
  }
}
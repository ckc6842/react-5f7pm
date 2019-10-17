import React, { Component } from 'react'
import Tooltip from './Tooltip'
class Main extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {}

	render() {
		return (
      // tooltip component
      <div>
        <Tooltip text="your reading now">
          React Quickly !!
        </Tooltip>
      </div>
		)
	}
}

export default Main
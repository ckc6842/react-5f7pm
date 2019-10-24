import React, { Component } from 'react'
import TimerWrapper from './TimerWrapper'
class Main extends Component {
	constructor (props) {
    super(props)
    this.state = {
    }
  }

	render() {
		return (
      <div>
        <TimerWrapper />
      </div>
		)
	}
}

export default Main
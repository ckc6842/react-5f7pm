import React from 'react'
import Tooltip from './Tooltip'
import TooltipOptions from './TooltipOptions'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      method: 'over',
      position: 'bottom'
    }
  }

  updateMethod = (e) => {
    this.setState({
      method: e.target.value
    })
  }

  updatePosition = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render () {
    return (
      <div>
        <TooltipOptions options={['over', 'click']}
          handleOption={this.updateMethod}/>
        <TooltipOptions options={['bottom', 'top']}
          handleOption={this.updatePosition} />
        <div>
          <Tooltip method={this.state.method}
            position={this.state.position}
            text="The book you're reading now">React Quickly</Tooltip>
          <span> was published in 2017. It's awesome!</span>
        </div>
        <div>{this.state.method} / {this.state.position}</div>
      </div>
    )
  }
}
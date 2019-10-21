import React from 'react'
import Tooltip from './Tooltip'
import TooltipOptions from './TooltipOptions'
import CONST from './CONST'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      method: CONST.METHOD.OVER,
      position: CONST.POSITION.BOTTOM
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
        <TooltipOptions options={[CONST.METHOD.OVER, CONST.METHOD.CLICK]}
          handleOption={this.updateMethod}/>
        <TooltipOptions options={[CONST.POSITION.BOTTOM, CONST.POSITION.TOP]}
          handleOption={this.updatePosition} />
        <div>
          <Tooltip method={this.state.method}
            position={this.state.position}
            text="The book you're reading now">React Quickly</Tooltip>
          <span> was published in 2017. It's awesome!</span>
        </div>
      </div>
    )
  }
}
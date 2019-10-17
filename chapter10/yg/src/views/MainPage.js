import React, { Component } from 'react'
import Tooltip from './components/Tooltip/Tooltip'
import { DIRECTION } from './components/Tooltip/const'

class MainPage extends Component {
  render () {
    return (
      <>
        Magna reprehenderit consectetur deserunt.
        <Tooltip text="This is Click Tooltip." direction={DIRECTION.DOWN} click> Click me! </Tooltip>
        Labore dolore fugiat amet culpa occaecat veniam et exercitation aute aliquip laborum elit ad. 
        Duis consequat reprehenderit anim consequat excepteur eiusmod eu commodo. 
        Eu ea deserunt aliqua nulla ea. Lorem qui elit Lorem elit duis fugiat cillum amet.
        <Tooltip text="This is Hover Tooltip." direction={DIRECTION.UP} hover> Hover me! </Tooltip> 
        Voluptate laborum sunt consequat occaecat esse dolor laborum Lorem dolor. 
        Eiusmod adipisicing duis eiusmod elit aute voluptate cillum sint culpa duis cupidatat quis.
      </>
    )
  }
}

export default MainPage

import React from 'react'
import Link from './Link'

export default class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: []
    }
  }

  componentDidMount () {
    fetch('/menus.json')
      .then((res) => res.json())
      .then((menus) => {
        this.setState({
          menus: menus
        })
      })
  }

  render () {
    return (
      <div>
        {this.state.menus.map((v, i) =>
          <div key={i}>
            <Link label={v} />
          </div>
        )}
      </div>
    )
  }
}
import React, { Component } from 'react'
import Link from './Link'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuList: [],
    }
    this.fetchMenuList = this.fetchMenuList.bind(this)
  }
  componentDidMount () {
    this.fetchMenuList()
  }
  render () {
    console.log(this.state)
    return (
      <>
        {
          this.state.menuList.map((menu, index) => (
            <>
              <Link key={index} href={menu.href} title={menu.title} />
              <br/>
            </>
          ))
        }
      </>
    )
  }
  async fetchMenuList () {
    await fetch('resources/menuList.json')
      .then((response) => {
        return response.json()
      })
      .then((menuList) => {
        this.setState({ menuList })
        console.log(menuList)
      })
  }
}

export default Menu

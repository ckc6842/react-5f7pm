import React, { Component } from 'react'

class Main extends Component {
	constructor (props) {
    super(props)
    this.state = {
      menuList: [
        'Home',
        'About',
        'Services',
        'Portfolio',
        'Contact us',
      ]
    }
	}
	render() {
		return (
      this.state.menuList.map((menu, index) => {
        var result =
        <div key={ index }>
          <a className="App-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer">
            { menu }
          </a>
        </div>
        return result
      })
		)
	}
}

export default Main
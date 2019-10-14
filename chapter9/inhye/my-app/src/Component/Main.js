import React, { Component } from 'react'

class Main extends Component {
	constructor (props) {
    super(props)
    this.state = {
      menuList: []
    }
  }
  
  componentDidMount() {
    fetch('./menuList.json')
    .then((response) => response.json())
    .then(json => this.setState({menuList: json}))
    .catch(err => console.log(err));
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
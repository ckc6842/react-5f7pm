import React from 'react';
import LinkMenu from './LinkMenu';
import './Menu.css'

class GlobalNavMenu extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            menus: props.menus,
        }
    }

    componentDidMount() {
        this.initDefaultMenu()
    }

    initDefaultMenu() {
        fetch('/menus.json')
        .then((response) => response.json())
        .then((menus) => { // 이름이 같으면 너무 혼동스러움, 컨벤션은?
            this.setState({menus: menus})
        })
        .catch((err) => console.log(err))
        
    }

    render() {
        return <div className='Menu'>
            { this.state.menus.map((v,i) => {
                return <li className='Menu-main' key={i}><LinkMenu label={v}/></li>
            })}
        </div>
    }
}

GlobalNavMenu.defaultProps = {
    menus: [
        'Home',
        'About',
        'Services'
    ]
}

GlobalNavMenu.protoType = {
    // menu: React.PropTypes.array
}

export default GlobalNavMenu;

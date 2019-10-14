import React from 'react';
import Link from './link.jsx';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus : []
        }
    }

    componentDidMount() {
        fetch('/menulist.json')
        .then((response)=>response.json())
        .then((menus)=>this.setState({menus:menus}))
    }

    render() {
        return <div> { this.state.menus.map((v,i)=>{
                    return <div key={i}><Link label={v}/></div>
                })
            }</div>
    }
}

export default Menu;
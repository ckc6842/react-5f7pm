import React from 'react';

class LinkMenu extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            label: props.label,
            url: '/' + props.label.toLowerCase().trim().replace(' ','-'),
        }
    }

    render() {
        return <span>
            <a href={this.state.url}>
                {this.state.label}
            </a>
        </span>
    }
}

LinkMenu.defaultProps = {
    label: 'LINK_MENU',
    url: '/',
}

LinkMenu.protoType = {
    // label: React.PropTypes.string
}

export default LinkMenu;

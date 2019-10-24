import React from 'react';

class Button extends React.Component {
    startTimer(event) {
        return this.props.startTimer(this.props.time)
    }

    render() {
        return <button type="button" className="btn-default btn"
            onClick={this.startTimer.bind(this)}>
            {this.props.time} seconds
        </button>
    }
}

export default Button;
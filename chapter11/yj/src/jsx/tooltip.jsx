import React from 'react';
import ReactDOM from 'react-dom';

const ToolTipEventType = {
    Click : 'Click',
    Hover : 'Hover'
};

const ToolTipPosition = {
    Bottom : 'Bottom',
    Top : 'Top'
}

class Tooltip extends React.Component {
    constructor (props) {
        super(props)
        this.state = {opacity : false, eventType : ToolTipEventType.Click, toopTipPos : ToolTipPosition.Bottom}
        this.toggle = this.toggle.bind(this)
    }

    toggle(eventType) {
        if (eventType !== this.state.eventType)
            return;

        const tooltipNode = ReactDOM.findDOMNode(this) // 왜 this return 안하고 ReactDOM에서 찾지?

        this.setState({
            opacity : !this.state.opacity,
            top : tooltipNode.offsetTop,
            left : tooltipNode.offsetLeft
        })
    }

    render() {
        const tooltipStyle = {
            zIndex : (this.state.opacity) ? 1000 : -1000,
            opacity : +this.state.opacity,
            top : (this.state.top || 0) + 20,
            left : (this.state.left || 0) -30
        }

        if (this.state.toopTipPos === ToolTipPosition.Top) {
            tooltipStyle['top'] = (this.state.top || 0) - 50;
        }

        return (
            <div style={{display:'inline'}}>
                <span style={{color:'blue'}}
                    onMouseOver={() => this.toggle(ToolTipEventType.Hover)}
                    onMouseOut={() => this.toggle(ToolTipEventType.Hover)}
                    onMouseUp={() => this.toggle(ToolTipEventType.Click)}>
                    {this.props.children}
                </span>

                <div className="tooltip bottom" style={tooltipStyle} role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
} 

export default Tooltip;
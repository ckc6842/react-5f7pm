import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Tooltip.css'


class Tooltip extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            opacity: false,
            vAlign: props.vAlign,
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle () {
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }

    // TODO 어,,,vscode 에 TODO 플러그인 없나요? (플러그인은 있는데 문법 강조는 안되는군요~)
    // TODO React 컴포넌의 경우 상태를 바꾸는 함수의 경우 컨벤션? set? 
    // TODO 저번에 얘기했던 파라미터 이름은? 그냥 똑같이?
    // TODO md 파일 수정할 것
    setVerticalAlign (verticalAlign) {
        this.setState({
            vAlign: verticalAlign,
        })
    }

    render () { 
        const marginTop = (this.state.vAlign === 'bottom') ? 30 : -30
        const style = {
            zIndex: (this.state.opacity) ? 1000: -1000,
            opacity: +this.state.opacity,
            position: 'absolute',
            top: (this.state.top || 0) + marginTop,
            left: (this.state.left || 0) -30
        }

        return(
            <div className="Tooltip_container">
                <span className="Tooltip_word"
                    onMouseEnter={(this.props.supportMouseEvent) ? this.toggle : null}
                    onMouseOut={(this.props.supportMouseEvent) ? this.toggle : null}
                    onClick={(this.props.supportClickEvent) ? this.toggle : null}>
                        {this.props.children}
                </span>
                <div style={style}
                    role="tooltip">
                    <div className="Tooltip_text">
                    {this.props.text}
                    </div>
                </div>
            </div>
        )
    }

}

Tooltip.defaultProps = {
    text: 'Nothing',
    supportMouseEvent: true,
    supportClickEvent: false,
    vAlign: 'bottom'
}

Tooltip.propTypes = {
    tipText: PropTypes.string
}

export default Tooltip;

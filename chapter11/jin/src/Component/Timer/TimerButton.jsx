import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TimerButton.css'
import TimerSound from './TimerSound';

class TimerButton extends Component {
    constructor (props) {
        super(props)
    }

    buildButtonText () {
        // 버튼 텍스트가 강제로 지정되었을 경우 최 우선
        if (this.props.text != null) {
            return this.props.text
        }
        if (this.props.time < 1) {
            return '0 Minute'
        }
        if (this.props.time < 60) {
            return this.props.time + ' Seconds'
        }
        // 60초 이상일 경우 분 단위 시간을 초로 넘겨줬을 걸 가정
        if (this.props.time > 60) {
            return this.props.time / 60 + ' Minutes'
        }
    }

    // TODO: props.time 이 0보다 클 경우만 체크하려면 if?
    render() {
        return <button type="button" 
                    className="TimerButton_basic-layout TimerButton_basic-text" 
                    onClick={() => this.props.onClickHandler(this.props.time, this.props.time)}>
            {this.buildButtonText()}
        </button>
    }
}

TimerButton.defaultProps = {
    time: 0,
    text: null
}

TimerButton.propTypes = {
    time: PropTypes.number,
    text: PropTypes.string
}

export default TimerButton

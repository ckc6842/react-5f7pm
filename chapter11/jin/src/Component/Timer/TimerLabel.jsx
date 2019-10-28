import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TimerLabel.css'

class TimerLabel extends Component {

    constructor (props) {
        super(props)
    }

    buildHeuristicLeftTimeText (timeSecond) {
        const prefixLabel = 'Time Left: '

        if (timeSecond < 60) {
            return prefixLabel + timeSecond + " Seconds"
        }

        let leftMinutes = Math.ceil(timeSecond / 60)
        let leftSeconds = timeSecond % 60
        // TODO 시간 계산 버그나 리펙토링은 나중에...
        // 초가 (0에서) 59로 변경될 때 타이머의 남은 분이 바뀐 경우이므로 -1분 차감
        if (leftSeconds > 0) { 
            leftMinutes -= 1
        }
        return prefixLabel + leftMinutes + " Min " + leftSeconds + " Sec" 
    }

    render () {
        // 타이머가 끝났을 때 특정 동작을 하는 건 라벨의 역활이 아니므로 주석 처리
        // if (this.props.timeLeft === 0) {}
        if (this.props.timeLeft === null || this.props.timeLeft === 0) {
            return <div className="TimerLabel_layout TimerLabel_basic-text">
                Time is over!
            </div>
        }
        
        return <h1 className="TimerLabel_layout TimerLabel_basic-text">
            {this.buildHeuristicLeftTimeText(this.props.timeLeft)}
        </h1>
    }

}

TimerLabel.defaultProps = {
    timeLeft: 0
}

TimerLabel.propTypes = {
    timeLeft: PropTypes.number
}

export default TimerLabel

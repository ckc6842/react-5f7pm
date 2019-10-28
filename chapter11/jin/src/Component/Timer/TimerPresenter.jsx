import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TimerButton from './TimerButton'
import TimerLabel from './TimerLabel'
import TimerSlider from './TimerSlider'
import TimerSound from './TimerSound'

class TimerPresenter extends Component {

    constructor (props) {
        super(props)
        this.state = {
            timeStarted: 0,
            timeLeft: 0,
            timer: null
        }

        this.timerEndedSound = React.createRef()

        this.startTimer = this.startTimer.bind(this)
        this.pauseTimer = this.pauseTimer.bind(this)
        this.resumeTimer = this.resumeTimer.bind(this)
        this.cancelTimer = this.cancelTimer.bind(this)
        this.restartTimer = this.restartTimer.bind(this)
    }

    startTimer (timeLeft, timePressed) {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft === 0) {
                clearInterval(timer)
                // TODO: 발행된 이벤트를 받는 콜백을 사용하지 않고 직접 호출하는 방법은 없나? 클래스인데?
                // 이벤트를 발행하고 처리를 한다고 하더라도 깃허브 과제처럼 사운드 플레이에 대한 이벤트 명을 알아야 한다면, 
                // 컨트롤이 주시하고 있는 이벤트 명을 명시적으로 어떻게 노출하는가? (소스코드를 보고? 문서를 보고?)
                // this.timerEndedSound.playSound()
            }
            this.setState({ timeLeft: timeLeft })
        }, 1000)
        
        let timeStarted = timePressed ? timePressed : this.state.timeStarted
        return this.setState({ timeStarted: timeStarted, timeLeft: timeLeft, timer: timer })
    }

    pauseTimer () {
        clearInterval(this.state.timer)
        return this.setState({ timer: null })
    }

    resumeTimer () {
        if (this.state.timeLeft < 1) {
            return
        }
        return this.startTimer(this.state.timeLeft)
    }

    cancelTimer () {
        clearInterval(this.state.timer)
        return this.setState({
            timeLeft: 0,
            timer: null
        })
    }

    restartTimer () {
        console.log('Restart timer')
        return this.startTimer(this.state.timeStarted)
    }

    render () {
        return <div className="row-fluid">
            <h2>Timer</h2>
            <div className="btn-group" role="group">
                <TimerButton time={10} onClickHandler={this.startTimer}/>
                <TimerButton time={600} onClickHandler={this.startTimer}/>
                <TimerButton time={900} onClickHandler={this.startTimer}/>
            </div>
            <div className="btn-group" role="group">
                <TimerButton text="Pause" onClickHandler={this.pauseTimer}/>
                <TimerButton text="Resume" onClickHandler={this.resumeTimer}/>
                <TimerButton text="Cancel" onClickHandler={this.cancelTimer}/>
                <TimerButton text="Restart" onClickHandler={this.restartTimer}/>
            </div>
            <TimerLabel timeLeft={this.state.timeLeft} />
            <TimerSlider timeLeft={this.state.timeLeft} timeStarted={this.state.timeStarted} />
            <TimerSound ref={this.timerEndedSound} filePath="flute_c_long_01.wav" />
        </div>
    }

}

TimerPresenter.defaultProps = {
    timeLeft: 0,
    timeStarted: 0,
    timer: null
}

TimerPresenter.propTypes = {
    timeStarted: PropTypes.number,
    timeLeft: PropTypes.number,
    timer: PropTypes.object
}

export default TimerPresenter

import React from 'react';
import Timer from './timer.jsx';
import Button from './button.jsx';

class PauseButton extends React.Component {
    pauseTimer(event) {
        return this.props.pauseTimer()
    }

    render() {
        return <button type="button" onClick={this.pauseTimer.bind(this)}>
            Pause
        </button>
    }
}

class CancelButton extends React.Component {
    cancelTimer(event) {
        return this.props.cancelTimer()
    }

    render() {
        return <button type="button" onClick={this.cancelTimer.bind(this)}>
            Cancel
        </button>
    }
}

class ResetButton extends React.Component {
    resetTimer(event) {
        return this.props.resetTimer()
    }

    render() {
        return <button type="button" onClick={this.resetTimer.bind(this)}>
            Reset
        </button>
    }
}

class TimerWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {timeLeft : null, timer : null, isPaused : false, timerDuration : null}
        this.startTimer = this.startTimer.bind(this)
        this.toggleTimerPaused = this.toggleTimerPaused.bind(this)
        this.cancelTimer = this.cancelTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(()=>{
            console.log('2: Inside of setInterval')
            if (this.state.isPaused) return;
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft === 0) clearInterval(timer)
            this.setState({timeLeft : timeLeft})
        }, 1000)
        console.log('1 : After set Interval')

        return this.setState({timeLeft : timeLeft, timer : timer, timerDuration : timeLeft})
    }

    toggleTimerPaused() {
        this.setState({isPaused : !this.state.isPaused})
    }

    cancelTimer() {
        this.setState({timeLeft : 0})
        clearInterval(this.state.timer)
    }

    resetTimer() {
        this.setState({timeLeft : this.state.timerDuration})
    }

    render() {
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group">
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="10" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                    <PauseButton pauseTimer={this.toggleTimerPaused}/>
                    <CancelButton cancelTimer={this.cancelTimer}/>
                    <ResetButton resetTimer={this.resetTimer}/>
                </div>
                <Timer timeLeft={this.state.timeLeft}/>
                <audio id="end-of-time" src="/yeah.wav" preload="auto"></audio>
            </div>
        )
    }
}

export default TimerWrapper;
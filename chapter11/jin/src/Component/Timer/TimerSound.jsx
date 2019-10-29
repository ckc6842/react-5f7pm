import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TimerSound extends Component {

    constructor (props) {
        super(props)
        
        this.state = {
            src: this.props.filePath
        }

        this.audioPlayer = React.createRef()

        this.setSource = this.setSource.bind(this)
        this.playSound = this.playSound.bind(this)
        this.stopSound = this.stopSound.bind(this)
    }

    setSource (filePath) {
        // this.stopSound()
        this.setState({
            src: filePath
        })
    }

    playSound () {
        const player = this.audioPlayer.current
        // TODO: 오디오 태그가 사운드를 플레이중인지 체크할 수 있는 함수가 있는지 확인
        if (!player.paused) {
            this.stopSound()
        }
        player.play()
    }

    stopSound () {
        const player = this.audioPlayer.current
        player.pause();
    }

    // handleTimerEnded () {
    //     this.refs.endOfTime.play()
    // }

    // componentDidMount () {
    //     window.addEventListener('timeEnded', this.handleTimerEnded)
    // }

    render() {
        return <audio 
            ref={this.audioPlayer} 
            src={this.state.src} 
            preload="auto">
        </audio>
    }
}

TimerSound.defaultProps = {
    src: 'flute_c_long_01.wav'
}

TimerSound.propTypes = {
    src: PropTypes.string
}

export default TimerSound

import React, { Component } from 'react'

class ChangeButton extends Component {
	constructor (props) {
    super(props)
    this.state = {
      status: '',
    }
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onClickChange = this.onClickChange.bind(this)
  }

  onChangeStatus () {
    //    시작 -> 일시중지
    //    일시중지 -> 재시작
    if (this.props.timeLeft > 0) {
      this.setState({
        status: 'Pause',
      })
    }
    return this.props.timeLeft
  }

  onClickChange () {
    return (e) => {
      //  TODO: pause 이면 멈춤
      //  TODO: restart이면 다시 시작
    }
  }

  componentDidUpdate (prevProp) {
    if (prevProp.timeLeft !== this.props.timeLeft) {
      this.onChangeStatus()
    }
  }
	render() {
		return (
      <button type="button"
              className="btn-primary btn"
              onClick={this.onClickChange}>
        {this.state.status}
      </button>
		)
	}
}

export default ChangeButton
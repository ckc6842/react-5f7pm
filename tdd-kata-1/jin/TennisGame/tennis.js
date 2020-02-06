const { TENNIS_POINTS, GAME_STATUS } = require('./const')

/**
 * [TDD Kata] 테니스 게임 클래스
 * 해당 테니스 게임은 두명의 플레이어가 1 세트의 경기만으로 이루어진다고 가정한다.
 * 두 플레이어의 점수가 게임 매치 포인트에 해당하는 40점이 되면 듀스 상태를 제공한다.
 * 듀스 상태에서는 두번 연속 포인트를 획득해야만 게임이 종료되고 승리할 수 있다.
 */
class TennisGame {
 
  /**
   * 테니스 게임 클래스 생성자는 명시적으로 게임을 할 플레이어 두명을 필수 인자로 받음
   * TODO 생성자에서 필수 파라미터 검증을 통해 예외 처리
   * game.start() 함수를 제공하고 해당 함수에서 게임을 시작할 수 있는 컨디션을 체크?
   * 자바스크립트 클래스의 생성자 오류는 보통 어떻게 처리하는가?
   * @param {GamePlayer} leftPlayer 
   * @param {GamePlayer} rightPlayer 
   */
  constructor (leftPlayer, rightPlayer) {
    this.leftPlayer = leftPlayer
    this.rightPlayer = rightPlayer
    this.advantagePlayer = null
    this.gameStatus = GAME_STATUS.READY
  }
  
  /**
   * 파라미터로 받은 player 가 해당 함수 내에서 오염이 발생 (사이드 이펙트 발생 가능성)
   * TODO 자바 스크립트에서 이걸 우아하게 처리할 수 있는 방법을 찾아서 수정할 것
   * @param {GamePlayer} player 
   */
  pointTo(player) {
    if ((player instanceof GamePlayer) === false) {
      throw(new Error('GamePlayer param is must required!'))
    }
    // 게임이 이미 끝난상태라면 에러 처리
    if (this.gameStatus === GAME_STATUS.END) {
      throw(new Error('Game is over. point is ignored!'))
    }

    // 게임이 듀스 상태라면 어드벤티지 플레이어와 게임 상태를 업데이트
    if (this.gameStatus === GAME_STATUS.DEUCE) {
      this.updateDeuceAdvantageAndGameStatus(player)
      return
    }

    let addedPoint = player.addPoint()
    // 스코어를 더한 점수가 게임 매치 포인트라면 듀스 상태인지 확인
    if (addedPoint === TENNIS_POINTS.MATCH) {
      this.updateGameStatus()
    }
    else if (addedPoint > TENNIS_POINTS.MATCH) {
      this.gameStatus = GAME_STATUS.END
    }
  }

  updateGameStatus() {
    if ((this.leftPlayer.getPoint() == TENNIS_POINTS.MATCH) &&
        (this.rightPlayer.getPoint() == TENNIS_POINTS.MATCH)) {
      this.gameStatus = GAME_STATUS.DEUCE;
    }
  }

  updateDeuceAdvantageAndGameStatus(player) {
    if (this.advantagePlayer == null) {
      this.advantagePlayer = player
      this.gameStatus = GAME_STATUS.DEUCE
    }
    else if (this.advantagePlayer == player) {
      player.setPoint(TENNIS_POINTS.WIN)
      this.gameStatus = GAME_STATUS.END
    }
    else {
      this.advantagePlayer = null
      this.gameStatus = GAME_STATUS.DEUCE
    }
  }

  getLeftPlayer() {
    return this.leftPlayer
  }

  getRightPlayer() {
    return this.rightPlayer
  }

  getAdvantagePlayer() {
    return this.advantagePlayer
  }

  getGameStatus() {
    return this.gameStatus
  }

  getWinner() {
    if (this.gameStatus < GAME_STATUS.END) {
      return undefined
    }
    if (this.leftPlayer.getPoint() > this.rightPlayer.getPoint()) {
      return this.leftPlayer
    } 
    else {
      return this.rightPlayer
    }
  }

}

class GamePlayer {

  constructor (name) {
    this.name = name
    this.point = 0
  }

  getName() {
    return this.name
  }

  getPoint() {
    return this.point
  }

  setPoint(point) {
    this.point = point
  }

  addPoint() {
    if (this.point >= TENNIS_POINTS.WIN) {
      return this.point
    }

    switch (this.point) {
      case TENNIS_POINTS.LOVE:
        this.point = TENNIS_POINTS.FIFTEEN
        break
      case TENNIS_POINTS.FIFTEEN:
        this.point = TENNIS_POINTS.THIRTY
        break
      case TENNIS_POINTS.THIRTY:
        this.point = TENNIS_POINTS.FORTY
        break
      case TENNIS_POINTS.FORTY:
        this.point = TENNIS_POINTS.WIN
        break
      default:
        this.point = TENNIS_POINTS.LOVE
    }

    return this.point
  }

}

module.exports = { TennisGame, GamePlayer }

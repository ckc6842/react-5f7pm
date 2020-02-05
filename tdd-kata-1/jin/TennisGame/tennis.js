const { TENNIS_POINTS, GAME_STATUS } = require('./const')

class TennisGame {
 
  constructor (leftPlayer, rightPlayer) {
    this.leftPlayer = leftPlayer
    this.rightPlayer = rightPlayer
    this.advantagePlayer = null
    this.gameStatus = GAME_STATUS.READY
  }
  
  pointTo(player) {
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

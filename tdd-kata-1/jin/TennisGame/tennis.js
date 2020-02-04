const GamePoints = require('./const')

class TennisGame {
 
  constructor (leftPlayer, rightPlayer) {
    this.leftPlayer = leftPlayer
    this.rightPlayer = rightPlayer
  }

  pointTo(player) {
    if (player === this.leftPlayer) {
      this.leftPlayer.addPoint()
    }
    else if (player === this.rightPlayer) {
      this.rightPlayer.addPoint()
    }
  }

  getLeftPlayer() {
    return this.leftPlayer
  }

  getRightPlayer() {
    return this.rightPlayer
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

  addPoint() {
    if (this.point === GamePoints.POINT_LOVE) {
      this.point = GamePoints.POINT_FIFTEEN
    }
    else if (this.point < GamePoints.POINT_THIRTY) {
      this.point = GamePoints.POINT_THIRTY
    }
    else if (this.point < GamePoints.POINT_FORTY) {
      this.point = GamePoints.POINT_FORTY
    }
  }

}

module.exports = { TennisGame, GamePlayer }

// Tennis Game
// [난이도]
// 중
// [점수 규칙]
// - 각 플레이어는 한 게임에서 0 / 15 / 30 / 40점 중 한 점수를 획득할 수 있다.
// - 만약 한 플레이어가 40점일 때 점수를 따면 게임에서 승리하지만, 추가적인 특별한 룰이 있다.
// - 만약 두 플레이어가 모두 40점이라면 '듀스'가 된다.
//    = 듀스 후에는 점수를 딴 플레이어가 '어드벤티지'를 획득하고, 다음 공을 플레이한다.
//    = 어드벤티지를 획득한 플레이어가 점수를 따면 게임에서 승리한다.
//    = 어드벤티지를 획득한 플레이어의 반대 플레이어가 점수를 따면 듀스 상태로 돌아간다.

const POINT = [0, 15, 30, 40]

class TennisGame {
  constructor () {
    this.players = {
      0: new TennisPlayer('Player A'),
      1: new TennisPlayer('Player B'),
    }
  }

  addPoint (player) {
    this.players[player].takePoint()
  }

  getPlayer (player) {
    return this.players[player]
  }
}

class TennisPlayer {
  constructor (name) {
    this.name = name
    this.winCount = 0
  }
  takePoint () {
    if (this.winCount < POINT.length - 1) {
      this.winCount++
    }
  }
  getName () {
    return this.name
  }
  getPoint () {
    return POINT[this.winCount]
  }
}

module.exports = {
  TennisGame,
  TennisPlayer,
}
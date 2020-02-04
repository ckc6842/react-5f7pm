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

const POINT = {
  LOVE: 0,
  FIFTEEN: 15,
  THIRTY: 30,
  FOURTY: 40,
}

class TennisGame {
  constructor () {
    this.players = {
      0: new TennisPlayer('Player A'),
      1: new TennisPlayer('Player B'),
    }
    this.adventagePlayer = undefined
    this.winner = undefined
  }

  givePoint (playerId) {
    if (this.winner) {
      throw new Error('Game already over')
    }
    const player = this.players[playerId]
    if (this.hasAdventage(player)) {
      this.declareWinner(player)
      return
    }

    if (this.checkDuce()) {
      this.adventagePlayer = this.adventagePlayer ? undefined : player
      return
    }

    if (player.getPoint() === POINT.FOURTY) {
      this.declareWinner(player)
      return
    }

    player.takePoint()
  }
  
  checkDuce () {
    return Object.values(this.players)
                 .every(player => player.getPoint() === POINT.FOURTY)
  }

  declareWinner (player) {
    console.log(`Winner is ${player.getName()}`)
    this.winner = player
  }

  getWinner () {
    return this.winner
  }

  hasAdventage (player) {
    return this.adventagePlayer === player
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
    if (this.getPoint() !== POINT.FOURTY) {
      this.winCount++
    }
  }
  getName () {
    return this.name
  }
  getPoint () {
    const WIN_COUNT_POINT = {
      0: POINT.LOVE,
      1: POINT.FIFTEEN,
      2: POINT.THIRTY,
      3: POINT.FOURTY,
    }
    return WIN_COUNT_POINT[this.winCount]
  }
}

module.exports = {
  TennisGame,
  TennisPlayer,
}
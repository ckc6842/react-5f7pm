class Tennis {
// - 각 플레이어는 한 게임에서 0 / 15 / 30 / 40점 중 한 점수를 획득할 수 있다.
// - 만약 한 플레이어가 40점일 때 점수를 따면 게임에서 승리하지만, 추가적인 특별한 룰이 있다.
// - 만약 두 플레이어가 모두 40점이라면 '듀스'가 된다.
//    = 듀스 후에는 점수를 딴 플레이어가 '어드벤티지'를 획득하고, 다음 공을 플레이한다.
//    = 어드벤티지를 획득한 플레이어가 점수를 따면 게임에서 승리한다.
//    = 어드벤티지를 획득한 플레이어의 반대 플레이어가 점수를 따면 듀스 상태로 돌아간다.
  constructor () {
    this.player = new Player()
  }
  takeField (playerName, currentScore) {
    this.player.addPoint(playerName, currentScore)
  }
  getPlayerScore (playerName) {
    return this.player.getPlayerScore(playerName)
  }
}

class Player {
  constructor () {
    this.playerList = [
      {
        name: 'A',
        hasAdvantage: false,
        score: 0,
      },
      {
        name: 'B',
        hasAdvantage: false,
        score: 0,
      },
    ]
  }
  findPlayer (playerName) {
    for (let i = 0; i < this.playerList.length; i ++) {
      if (this.playerList[i].name === playerName) {
        return this.playerList[i]
      }
    }
  }
  getPlayerScore (playerName) {
    const player = this.findPlayer(playerName)
    return player.score
  }
  addPoint (playerName, currentScore) {
    for (let i = 0; i < this.playerList.length; i ++) {
      if (this.playerList[i].name === playerName) {
        this.playerList[i].score += currentScore
      }
    }
  }
  hasPlayerAdvantage (playerName) {
    const player = this.findPlayer(playerName)
    return player.hasAdvantage
  }
}

module.exports = { Tennis, Player };
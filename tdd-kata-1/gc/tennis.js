class Tennis {
  constructor (playerA, playerB) {
    this.playerA = playerA
    this.playerB = playerB
    this.winner = null
  }

  getPointBoard () {
    return this.playerA.getPoint() + ' ' + this.playerB.getPoint()
  }

  getGameWinner () {
    return this.winner ? this.winner.name : null
  }

  winPoint (player) {
    if (player.getPointCount() === 3) {
      this.winner = this.playerA
      return
    }
    player.addPoint()
  }
}

module.exports = Tennis;
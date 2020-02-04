class Tennis {
  constructor (playerA, playerB) {
    this.players = [playerA, playerB]
    this.winner = null
    this.advantage = null
    this.isDueceStarted = false
  }

  getPointBoard () {
    return this.players.map(player => player.getPoint()).join(' ')
  }

  getGameWinner () {
    if (this.winner) {
      return this.winner.name
    } else if (this.advantage) {
      return 'ADV ' + this.advantage.name
    } else {
      return this.getPointBoard()
    }
  }

  winPoint (player) {
    if (!this.isDueceStarted && player.getPointCount() === 3) {
      this.winner = player
      return
    }

    player.addPoint()
    if (!this.players.every(player => player.getPointCount() === 3)) return

    if (!this.isDueceStarted) {
      this.isDueceStarted = true
      return
    }

    if (this.advantage === null) {
      this.advantage = player
    } else if (this.advantage === player) {
      this.winner = player
    } else {
      this.advantage = null
    }
  }
}

module.exports = Tennis;
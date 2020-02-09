const { GAME_STATUS } = require('./const')

class TicTacToeGame {

  constructor (playerWhite, playerBlack) {
    this.playerWhite = playerWhite
    this.playerBlack = playerBlack

    this.gameStatus = GAME_STATUS.READY
    this.gameBoard = this.initGameBoard()
    this.winner = undefined
  }

  initGameBoard() {
    return [
      new Array(3).fill(-1), 
      new Array(3).fill(-1),
      new Array(3).fill(-1)
    ]
  }

  putStone(player, row, column) {
    const stone = player.getStone()
    this.gameBoard[row-1][column-1] = stone

    console.log('Game Board:', this.gameBoard)
    this.updateGameStatusAndWinner()
  }

  updateGameStatusAndWinner() {

  }

  getWinner() {
    return this.playerWhite
  }

}

class GamePlayer {

  constructor (name, stone) {
    this.name = name
    this.stone = stone
  }

  getName() {
    return this.name
  }

  getStone() {
    return this.stone
  }

}

module.exports = { TicTacToeGame, GamePlayer }
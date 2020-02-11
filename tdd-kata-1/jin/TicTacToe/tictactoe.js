const { CELL_STONE, GAME_STATUS } = require('./const')
const CELL_EMPTY = -100
const MAX_ROWS = 3
const MAX_PLAY_COUNT = 9

class TicTacToeGame {

  constructor (playerWhite, playerBlack) {
    this.playerWhite = playerWhite
    this.playerBlack = playerBlack

    this.gameStatus = GAME_STATUS.READY
    this.gameBoard = this.initGameBoard()
    
    this.playCount = 0
    this.winner = undefined
  }

  initGameBoard() {
    return [
      new Array(3).fill(CELL_EMPTY), 
      new Array(3).fill(CELL_EMPTY),
      new Array(3).fill(CELL_EMPTY)
    ]
  }

  putStone(player, rowIdx, colIdx) {
    if (this.gameStatus === GAME_STATUS.END) {
      throw new Error('Game is already over!')
    }

    if (this.playCount > MAX_PLAY_COUNT) {
      throw new Error('Game is already over!')
    }

    let prevStone = this.gameBoard[rowIdx][colIdx]
    if (prevStone === undefined) {
      throw new Error('This point is not exist')
    }

    if (prevStone !== CELL_EMPTY) {
      throw new Error('This point has already stone')
    }

    this.gameBoard[rowIdx][colIdx] = player.getStone()
    this.playCount++
    
    this.updateGameStatusAndWinner(player, rowIdx, colIdx)
  }

  updateGameStatusAndWinner(player, rowIdx, colIdx) {
    if (this.gameStatus < GAME_STATUS.START) {
      this.gameStatus = GAME_STATUS.START
    }
    else if (this.gameStatus < GAME_STATUS.PLAY) {
      this.gameStatus = GAME_STATUS.PLAY
    }

    if (this.playCount === MAX_PLAY_COUNT) {
      this.gameStatus === GAME_STATUS.END
    }

    let stoneSum = player.getStone() * MAX_ROWS;
    let rowSum = this.gameBoard[rowIdx].reduce((a,b) => a + b)
    let colSum = this.gameBoard.map(row => row[colIdx]).reduce((a,b) => a + b)

    if ((stoneSum === rowSum) || (stoneSum === colSum)) {
      this.gameStatus = GAME_STATUS.END
      this.winner = player
      return this.winner
    }
    
    // 대각선 확인 (TODO 일반적인 로직으로 개선)
    let forwardDiagonalSum = 0
    let reverseDiagonalSum = 0
    for (let i=0; i < MAX_ROWS; i++) {
      forwardDiagonalSum += this.gameBoard[i][i]
      reverseDiagonalSum += this.gameBoard[i][MAX_ROWS-i-1]
    }

    if ((stoneSum === forwardDiagonalSum) || (stoneSum === reverseDiagonalSum)) {
      this.gameStatus = GAME_STATUS.END
      this.winner = player
    }

    return this.winner
  }

  getStatus() {
    return this.gameStatus
  }

  getWinner() {
    return this.winner
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
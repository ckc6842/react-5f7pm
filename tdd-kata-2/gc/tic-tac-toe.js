class TicTacToe {
  constructor () {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    this.players = [0, 1]
    this.currentTurn = 0
  }

  getBoard () {
    return this.board
  }

  getWinner () {
    for (let i = 0; i < 3; i++) {
      // Check horizontally
      var row = this.board[i]
      if (row.every(cell => cell === this.players[0])) return 0
      if (row.every(cell => cell === this.players[1])) return 1

      // Check vertically
      var column = this.board.map(row => row[i])
      if (column.every(cell => cell === this.players[0])) return 0
      if (column.every(cell => cell === this.players[1])) return 1
    }

    // Check diagonally
    var diagonal = this.board.map((row, index) => row[index])
    if(diagonal.every(cell => cell === this.players[0])) return 0
    if(diagonal.every(cell => cell === this.players[1])) return 1

    // Check reverse diagonally
    var reverseDiagonal = this.board.map((row, index) => row[(row.length - 1) - index])
    if(reverseDiagonal.every(cell => cell === this.players[0])) return 0
    if(reverseDiagonal.every(cell => cell === this.players[1])) return 1

    // Check if draw
    if (this.board.flat().every(cell => cell !== '')) return -1
    
    return false
  }

  putStone (row, col, player) {
    if (this.board[row - 1][col - 1] !== '') throw new Error('Already Exists')
    if (this.currentTurn !== player) throw new Error('Not your turn')

    this.board[row - 1][col - 1] = player
    this.currentTurn = (this.currentTurn + 1) % 2
  }
}

module.exports = TicTacToe

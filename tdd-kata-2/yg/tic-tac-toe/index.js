// [게임 진행 조건]
// - 3 x 3 그리드를 가진 9개의 필드가 있다.
// - X, O 돌을 놓는 두 명의 플레이어가 있다.
// - 게임이 종료되기 전까지 플레이어들이 번갈아가면서 필드에 돌을 놓는다.
// - 이미 돌이 놓인 필드에는 돌을 놓을 수 없다.
// [게임 종료 조건]
// * 승리
// - 한 플레이어가 한 행의 모든 필드에 돌을 놓았을 때
// - 한 플레이어가 한 열의 모든 필드에 돌을 놓았을 때
// - 한 플레이어가 한 대각선의 모든 필드에 돌을 놓았을 때
// * 무승부
// - 마지막 필드에 돌이 놓일 때

class TicTacToe {
  constructor () {
    this.board = this.getEmptyBoard()
    this.turn = TicTacToe.STONE.O // 언제나 O가 선턴임을 가정
    this.winner = undefined
  }

  getEmptyBoard () {
    const { E } = TicTacToe.STONE
    return [
      [E, E, E],
      [E, E, E],
      [E, E, E],
    ]
  }

  addStone (row, col, stone) {
    this.validateTurnPlay(row, col, stone)
    this.board[row][col] = stone

    this.winner = this.checkWinner()
    if (this.winner) {
      console.log(`${this.winner} win!`)
      return
    }

    if (this.isDraw()) {
      console.log('Draw')
      this.winner = 'Draw'
      return
    }
    this.toggleTurn()
  }

  checkWinner () {
    let winner = null
    winner = this.checkSubBoard(this.board) ||
             this.checkSubBoard(this.getRotatedBoard())
    return winner
  }

  checkSubBoard (board) {
    const { O, X, E } = TicTacToe.STONE
    for (let i = 0; i < 3; i++) {
      if (board[i].every(field => field === O)) {
        return O
      }
      if (board[i].every(field => field === X)) {
        return X
      }
    }
    if (board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]) {
      return board[0][0]
    }
    return E
  }

  validateTurnPlay (row, col, stone) {
    if (this.winner) {
      throw new Error('Game is over')
    }
    if (!this.isValidTurn(stone)) {
      throw new Error(`Not ${stone}'s turn.`)
    }
    if (!this.isValidPosition(row, col)) {
      throw new Error(`You can't put there.`)
    }
  }

  isValidTurn (stone) {
    return this.turn === stone
  }

  isValidPosition (row, col) {
    const indexRange = [0, 1, 2]
    return indexRange.includes(row) &&
           indexRange.includes(col) &&
           !this.board[row][col]
  }

  isDraw () {
    const { E } = TicTacToe.STONE
    return this.board.reduce((acc, row) => acc.concat(row), [])
                     .every(field => field !== E)
  }

  toggleTurn () {
    this.turn = this.turn === TicTacToe.STONE.O
                ? TicTacToe.STONE.X
                : TicTacToe.STONE.O
  }

  getBoard () {
    return this.board
  }

  getField (row, col) {
    return this.board[row][col]
  }

  getRotatedBoard () {
    let rotatedBoard = this.getEmptyBoard()
    for (let ri = 0; ri < 3; ri++) {
      for (let ci = 0; ci < 3; ci++) {
        rotatedBoard[ri][ci] = this.board[2-ci][ri]
      }
    }
    return rotatedBoard
  }
}

TicTacToe.STONE = {
  O: 'O',
  X: 'X',
  E: null,
}

module.exports = TicTacToe
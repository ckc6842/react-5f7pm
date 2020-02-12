const { TicTacToe, Player } = require('./tictactoe')
let tictactoe
beforeEach(() => tictactoe = new TicTacToe())
describe('Test TicTacToe', () => {
  const PLAYER_A_ID = 0
  const PLAYER_B_ID = 1
  const TABLE_SIZE = 3
  // test('A player Take One Field', () => {
  //   tictactoe.takeField(PLAYER_A_ID)
  //   expect(tictactoe.getCurrentField()).toBe(8)
  // })
  function startField () {
    let currentPlayer = PLAYER_A_ID
    for (let i = 0; i < TABLE_SIZE * TABLE_SIZE; i++) {
      tictactoe.takeField(currentPlayer)
      let isWinner = tictactoe.checkWinnerCondition(currentPlayer)
      if (isWinner) {
        console.log('winner!!!', currentPlayer)
        return
      } else {
        console.log('무승부')
      }
      //  플레이어 교체
      if (currentPlayer === PLAYER_A_ID) {
        currentPlayer = PLAYER_B_ID
      } else {
        currentPlayer = PLAYER_A_ID
      }
    }
  }
  function takeOneField (rowIndex, colIndex, currentPlayer) {
    tictactoe.takeOneField(rowIndex, colIndex, currentPlayer)
    let colBingoObj = tictactoe.checkColumnRule(currentPlayer)
    let rowBingoObj = tictactoe.checkRowRule(currentPlayer)
    let crossBingoObj = tictactoe.checkCrossRule(currentPlayer)

    return colBingoObj.isBingo || rowBingoObj.isBingo || crossBingoObj.isBingo
  }
  test('Test Player A Win as Row Bingo', () => {
    for (let i = 0; i < TABLE_SIZE * TABLE_SIZE; i++) {
      //  Player A가 첫째 가로 줄 빙고
      let isBingo = takeOneField(0, i, PLAYER_A_ID)
      if (isBingo) return
      isBingo = takeOneField(1, i, PLAYER_B_ID)
      if (isBingo) return
    }

    expect(tictactoe.checkWinnerCondition(PLAYER_A_ID)).toBe(true)
  })
  test('Test Player A Win as Column Bingo', () => {
    for (let i = 0; i < TABLE_SIZE * TABLE_SIZE; i++) {
      //  Player A가 첫째 세로 줄 빙고
      let isBingo = takeOneField(i, 0, PLAYER_A_ID)
      if (isBingo) return
      isBingo = takeOneField(i, 1, PLAYER_B_ID)
      if (isBingo) return
    }

    expect(tictactoe.checkWinnerCondition(PLAYER_A_ID)).toBe(true)
  })
  test('Test Player A Win as Cross Bingo', () => {
    for (let i = 0; i < TABLE_SIZE * TABLE_SIZE; i++) {
      //  Player A가 왼쪽 대각선 빙고
      let isBingo = takeOneField(i, i, PLAYER_A_ID)
      if (isBingo) return
      isBingo = takeOneField(i, TABLE_SIZE - (i+1), PLAYER_B_ID)
      if (isBingo) return
    }

    expect(tictactoe.checkWinnerCondition(PLAYER_A_ID)).toBe(true)
  })
})
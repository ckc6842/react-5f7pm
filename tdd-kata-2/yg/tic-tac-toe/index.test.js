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

const TicTacToe = require('./')

describe('TestSuite - Tic-Tac-Toe Game', () => {
  let game
  const { O, X, E } = TicTacToe.STONE

  const testDrawScenario = (start, end) => {
    /* O 부터 놓은 순서
     * 1X 2O 5X
     * 7X 0O 6O
     * 4O 3X 8O
     */
    const drawScenario = [
      [1, 1, O],
      [0, 0, X],
      [0, 1, O],
      [2, 1, X],
      [2, 0, O],
      [0, 2, X],
      [1, 2, O],
      [1, 0, X],
      [2, 2, O],
    ]
    for (let i = start; i <= end; i++) {
      game.addStone(...drawScenario[i])
    }
  }

  beforeEach(() => {
    game = new TicTacToe()
  })

  test('Test - Initialize Game', () => {
    expect(() => new TicTacToe()).not.toThrow()
  })

  test('Test - Initialize Empty Board', () => {
    const emptyBoard = game.getEmptyBoard()
    expect(game.getBoard()).toStrictEqual(emptyBoard)
  })

  test('Test - Add O Stone', () => {
    game.addStone(0, 0, O)
    expect(game.getField(0, 0)).toBe(O)
  })

  test('Test - Add Some Valid O and X Stones', () => {
    const expectBoard = [
      [X, O, E],
      [E, O, E],
      [O, X, E],
    ]
    testDrawScenario(0, 4)
    expect(game.isValidTurn(X)).toBe(true)
    expect(game.getBoard()).toStrictEqual(expectBoard)
  })

  test('Test - O Win - Same Row', () => {
    testDrawScenario(0, 6)
    game.addStone(2, 2, X)
    game.addStone(1, 0, O)
    expect(game.winner).toBe(O)
  })

  test('Test - O Win - Same Col', () => {
    testDrawScenario(0, 2)
    game.addStone(2, 2, X)
    game.addStone(2, 1, O)
    expect(game.winner).toBe(O)
  })

  test('Test - O Win - Down Diagonal', () => {
    game.addStone(0, 0, O)
    game.addStone(1, 0, X)
    game.addStone(1, 1, O)
    game.addStone(2, 1, X)
    game.addStone(2, 2, O)
    expect(game.winner).toBe(O)
  })

  test('Test - O Win - Up Diagonal', () => {
    game.addStone(2, 0, O)
    game.addStone(1, 0, X)
    game.addStone(1, 1, O)
    game.addStone(2, 1, X)
    game.addStone(0, 2, O)
    expect(game.winner).toBe(O)
  })

  test('Test - Draw', () => {
    testDrawScenario(0, 8)
    expect(game.winner).toBe('Draw')
  })

  test('Test - Play Twice (expect Error)', () => {
    expect(() => {
      game.addStone(0, 0, O)
      game.addStone(0, 1, O)
    }).toThrow()

    expect(() => {
      testDrawScenario(0, 2)
      game.addStone(2, 2, O)
    }).toThrow()
  })

  test('Test - Play in Same Position (expect Error)', () => {
    expect(() => {
      game.addStone(0, 0, O)
      game.addStone(0, 0, X)
    }).toThrow()

    expect(() => {
      game.addStone(0, 0, O)
      game.addStone(0, 1, X)
      game.addStone(0, 0, O)
    }).toThrow()
  })
})

const { CELL_STONE, GAME_STATUS } = require('./const')
const { TicTacToeGame, GamePlayer } = require('./tictactoe')

let game, playerWhite, playerBlack

describe('Test for basic game', () => {

  beforeEach(() => {
    playerWhite = new GamePlayer('White', CELL_STONE.WHITE)
    playerBlack = new GamePlayer('Black', CELL_STONE.BLACK)
    game = new TicTacToeGame(playerWhite, playerBlack)
  })

  test('This position is already used', () => {
    game.putStone(playerBlack, 0, 0)
    expect(() => game.putStone(playerWhite, 0, 0)).toThrow()
  })

  test('White player win by top 1 row', () => {
    game.putStone(playerWhite, 0, 0)
    game.putStone(playerBlack, 1, 0)
    game.putStone(playerWhite, 0, 1)
    game.putStone(playerBlack, 1, 1)
    game.putStone(playerWhite, 0, 2)

    expect(game.getWinner()).toBe(playerWhite)
  })

  test('Black player win by left 1 clos', () => {
    game.putStone(playerBlack, 0, 0)
    game.putStone(playerWhite, 0, 1)
    game.putStone(playerBlack, 1, 0)
    game.putStone(playerWhite, 1, 1)
    game.putStone(playerBlack, 2, 0)

    expect(game.getWinner()).toBe(playerBlack)
  })

  test('Game status is END', () => {
    game.putStone(playerBlack, 0, 0)
    game.putStone(playerWhite, 0, 1)
    game.putStone(playerBlack, 1, 0)
    game.putStone(playerWhite, 1, 1)
    game.putStone(playerBlack, 2, 0)

    expect(game.getStatus()).toBe(GAME_STATUS.END)
  })

  test('Game has no winner', () => {
    game.putStone(playerBlack, 0, 0)
    game.putStone(playerWhite, 0, 1)
    game.putStone(playerBlack, 0, 2)

    game.putStone(playerWhite, 1, 0) 
    game.putStone(playerBlack, 1, 1)
    game.putStone(playerWhite, 1, 2)

    game.putStone(playerWhite, 2, 0)
    game.putStone(playerBlack, 2, 1)
    game.putStone(playerWhite, 2, 2)

    expect(game.getWinner()).toBe(undefined)
  })

  test('Already game is over but trying to play', () => {
    game.putStone(playerBlack, 0, 0)
    game.putStone(playerWhite, 0, 1)
    game.putStone(playerBlack, 0, 2)

    game.putStone(playerWhite, 1, 0)
    game.putStone(playerBlack, 1, 1)
    game.putStone(playerWhite, 1, 2)

    game.putStone(playerWhite, 2, 0)
    game.putStone(playerBlack, 2, 1)
    game.putStone(playerWhite, 2, 2)

    expect(() => game.putStone(playerWhite, 0, 0)).toThrow()
  })

  test('Black player win by forward diagonal line', () => {
    game.putStone(playerBlack, 0, 0)
    game.putStone(playerWhite, 0, 1)
    game.putStone(playerBlack, 1, 1)
    game.putStone(playerWhite, 1, 0)
    game.putStone(playerBlack, 2, 2)

    expect(game.getWinner()).toBe(playerBlack)
  })

  test('White player win by reverse diagonal line', () => {
    game.putStone(playerWhite, 0, 2)
    game.putStone(playerBlack, 0, 0)
    game.putStone(playerWhite, 1, 1)
    game.putStone(playerBlack, 1, 2)
    game.putStone(playerWhite, 2, 0)

    expect(game.getWinner()).toBe(playerWhite)
  })

})

describe('Test for final winner', () => {

  beforeEach(() => {
    playerWhite = new GamePlayer('White', CELL_STONE.WHITE)
    playerBlack = new GamePlayer('Black', CELL_STONE.BLACK)
    game = new TicTacToeGame(playerWhite, playerBlack)
  })

})
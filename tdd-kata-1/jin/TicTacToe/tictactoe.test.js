const { CELL_STONE, GAME_STATUS } = require('./const')
const { TicTacToeGame, GamePlayer } = require('./tictactoe')

let game, playerWhite, playerBlack

describe('Test for basic game', () => {

  beforeEach(() => {
    playerWhite = new GamePlayer('White', CELL_STONE.WHITE)
    playerBlack = new GamePlayer('Black', CELL_STONE.BLACK)
    game = new TicTacToeGame(playerWhite, playerBlack)
  })

  test('White player win by top 1 row', () => {
    game.putStone(playerWhite, 1, 1)
    game.putStone(playerBlack, 2, 1)
    game.putStone(playerWhite, 1, 2)
    game.putStone(playerBlack, 2, 2)
    game.putStone(playerWhite, 1, 3)

    expect(game.getWinner()).toBe(playerWhite)
  })

})

describe('Test for final winner', () => {

})
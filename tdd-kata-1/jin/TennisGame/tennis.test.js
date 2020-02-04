const { TennisGame, GamePlayer } = require('./tennis')
const GamePoints = require('./const')

let game, playerRed, playerBlue

describe('Test for basic playing', () => {

  beforeEach(() => {
    playerRed = new GamePlayer('Red')
    playerBlue = new GamePlayer('Blue')
    game = new TennisGame(playerRed, playerBlue)
  })

  test('Red player taken first point', () => {
    game.pointTo(playerRed)
    expect(game.getLeftPlayer().getPoint()).toBe(GamePoints.POINT_FIFTEEN)
  })

  test('Red player taken forty point', () => {
    game.pointTo(playerRed)
    game.pointTo(playerRed)
    game.pointTo(playerRed)
    expect(game.getLeftPlayer().getPoint()).toBe(GamePoints.POINT_FORTY)
  })

})
const { TENNIS_POINTS, GAME_STATUS } = require('./const')
const { TennisGame, GamePlayer } = require('./tennis')

let game, playerRed, playerBlue

function takeGamePoint(player, count) {
  for (let i=0; i < count; i++) {
    game.pointTo(player)
  }
}

describe('Test for basic playing', () => {

  beforeEach(() => {
    playerRed = new GamePlayer('Red')
    playerBlue = new GamePlayer('Blue')
    game = new TennisGame(playerRed, playerBlue)
  })

  test('Red player taken first point', () => {
    game.pointTo(playerRed)
    expect(game.getLeftPlayer().getPoint()).toBe(TENNIS_POINTS.FIFTEEN)
  })

  test('Red player taken forty point', () => {
    takeGamePoint(playerRed, 3)
    expect(game.getLeftPlayer().getPoint()).toBe(TENNIS_POINTS.FORTY)
  })

  test('Red player win perfectly', () => {
    takeGamePoint(playerRed, 4)
    expect(game.getWinner()).toBe(playerRed)
  })

  test('Blue player win perfectly', () => {
    takeGamePoint(playerBlue, 4)
    expect(game.getWinner()).toBe(playerBlue)
  })

  test('Blue player win by one point', () => {
    takeGamePoint(playerBlue, 1)
    takeGamePoint(playerRed, 2)
    takeGamePoint(playerBlue, 3)
    expect(game.getWinner()).toBe(playerBlue)
  })

})

describe('Test for deuce playing', () => {

  beforeEach(() => {
    playerRed = new GamePlayer('Red')
    playerBlue = new GamePlayer('Blue')
    game = new TennisGame(playerRed, playerBlue)
  })

  test('Game point is deuce', () => {
    takeGamePoint(playerRed, 3)
    takeGamePoint(playerBlue, 3)
    expect(game.getGameStatus()).toBe(GAME_STATUS.DEUCE)
  })

  test('Red player taken advantage', () => {
    takeGamePoint(playerRed, 3)
    takeGamePoint(playerBlue, 3)
    takeGamePoint(playerRed, 1)
    expect(game.getAdvantagePlayer()).toBe(playerRed)
  })

  test('Blue player taken advantage', () => {
    takeGamePoint(playerRed, 3)
    takeGamePoint(playerBlue, 4)
    expect(game.getAdvantagePlayer()).toBe(playerBlue)
  })

  test('Red player win finally after deuce', () => {
    takeGamePoint(playerBlue, 4)
    expect(game.getWinner()).toBe(playerBlue)
  })

})

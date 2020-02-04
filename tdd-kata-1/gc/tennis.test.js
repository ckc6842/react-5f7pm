const Tennis = require('./tennis')
const Player = require('./player')

describe('Test Player', () => {
  let player
  beforeEach(() => {
    player = new Player('A')
  })

  it('Test initialize players', () => {
    expect(player.getPoint()).toBe(0)
  })

  it('Test add point', () => {
    expect(player.getPoint()).toBe(0)
    player.addPoint()
    expect(player.getPoint()).toBe(15)
    player.addPoint()
    expect(player.getPoint()).toBe(30)
    player.addPoint()
    expect(player.getPoint()).toBe(40)
  })

  it('Test add point exceed', () => {
    player.addPoint()
    player.addPoint()
    player.addPoint()
    player.addPoint()
    expect(player.getPoint()).toBe(40)
  })
})

describe('Test Tennis Game', () => {
  let tennis
  let playerA
  let playerB
  beforeEach(() => {
    playerA = new Player('A')
    playerB = new Player('B')
    tennis = new Tennis(playerA, playerB)
  })

  it('Test initialize players', () => {
    expect(playerA.getPoint()).toBe(0)
    expect(playerB.getPoint()).toBe(0)
  })

  it('Test one win point', () => {
    tennis.winPoint(playerA)
    expect(tennis.getPointBoard()).toBe('15 0')
  })

  it('Test multiple win point', () => {
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    expect(tennis.getPointBoard()).toBe('40 15')
  })

  it('Test win game without duece', () => {
    expect(tennis.getGameWinner()).toBe('0 0')
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    expect(tennis.getGameWinner()).toBe('A')
  })

  it('Test start duece', () => {
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerB)
    expect(tennis.getGameWinner()).toBe('40 40')
  })

  it('Test start advantage', () => {
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    expect(tennis.getGameWinner()).toBe('ADV A')
  })

  it('Test return duece after advantage', () => {
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    expect(tennis.getGameWinner()).toBe('40 40')
  })

  it('Test win game with duece', () => {
    tennis.winPoint(playerA)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerB)
    tennis.winPoint(playerA)
    tennis.winPoint(playerB)
    tennis.winPoint(playerB)
    tennis.winPoint(playerB)
    expect(tennis.getGameWinner()).toBe('B')
  })
})
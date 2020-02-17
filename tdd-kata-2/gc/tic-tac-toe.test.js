const TicTacToe = require('./tic-tac-toe')

describe('Test tic tac toe', () => {
  let tictactoe
  beforeEach(() => {
    tictactoe = new TicTacToe()
  })

  it('initialize game', () => {
    expect(tictactoe.getBoard()).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])
  })

  it('put a stone', () => {
    tictactoe.putStone(1, 1, 0)
    expect(tictactoe.getBoard()).toEqual([
      [0, '', ''],
      ['', '', ''],
      ['', '', '']
    ])
  })

  it('prevent to put a stone on already exists cell', () => {
    tictactoe.putStone(1, 1, 0)
    expect(() => tictactoe.putStone(1, 1, 1)).toThrow('Already Exists')
  })

  it('prevent to put a stone for same player twice', () => {
    tictactoe.putStone(1, 1, 0)
    expect(() => tictactoe.putStone(2, 1, 0)).toThrow('Not your turn')
  })

  it('win if put stones horizontally', () => {
    tictactoe.putStone(1, 1, 0)
    tictactoe.putStone(2, 2, 1)
    tictactoe.putStone(1, 2, 0)
    tictactoe.putStone(2, 1, 1)
    tictactoe.putStone(1, 3, 0)
    expect(tictactoe.getWinner()).toBe(0)
  })

  it('win if put stones vertically', () => {
    tictactoe.putStone(1, 1, 0)
    tictactoe.putStone(2, 2, 1)
    tictactoe.putStone(2, 1, 0)
    tictactoe.putStone(2, 3, 1)
    tictactoe.putStone(3, 1, 0)
    expect(tictactoe.getWinner()).toBe(0)
  })

  it('win if put stones diagonally', () => {
    tictactoe.putStone(1, 1, 0)
    tictactoe.putStone(2, 1, 1)
    tictactoe.putStone(2, 2, 0)
    tictactoe.putStone(2, 3, 1)
    tictactoe.putStone(3, 3, 0)
    expect(tictactoe.getWinner()).toBe(0)
  })

  it('win if put stones reverse diagonally', () => {
    tictactoe.putStone(1, 3, 0)
    tictactoe.putStone(2, 1, 1)
    tictactoe.putStone(2, 2, 0)
    tictactoe.putStone(2, 3, 1)
    tictactoe.putStone(3, 1, 0)
    expect(tictactoe.getWinner()).toBe(0)
  })

  it('draw when all stones are putted', () => {
    tictactoe.putStone(1, 1, 0)
    tictactoe.putStone(1, 3, 1)
    tictactoe.putStone(1, 2, 0)
    tictactoe.putStone(2, 1, 1)
    tictactoe.putStone(2, 2, 0)
    tictactoe.putStone(3, 2, 1)
    tictactoe.putStone(2, 3, 0)
    tictactoe.putStone(3, 3, 1)
    tictactoe.putStone(3, 1, 0)
    console.log(tictactoe.getBoard())
    expect(tictactoe.getWinner()).toBe(-1)
  })
})
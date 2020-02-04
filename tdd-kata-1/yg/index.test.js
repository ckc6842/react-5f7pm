// Tennis Game
// [난이도]
// 중
// [점수 규칙]
// - 각 플레이어는 한 게임에서 0 / 15 / 30 / 40점 중 한 점수를 획득할 수 있다.
// - 만약 한 플레이어가 40점일 때 점수를 따면 게임에서 승리하지만, 추가적인 특별한 룰이 있다.
// - 만약 두 플레이어가 모두 40점이라면 '듀스'가 된다.
//    = 듀스 후에는 점수를 딴 플레이어가 '어드벤티지'를 획득하고, 다음 공을 플레이한다.
//    = 어드벤티지를 획득한 플레이어가 점수를 따면 게임에서 승리한다.
//    = 어드벤티지를 획득한 플레이어의 반대 플레이어가 점수를 따면 듀스 상태로 돌아간다.

const { TennisGame, TennisPlayer } = require('./')

describe('TennisGame', () => {
  let game
  const PLAYER_A = 0
  const PLAYER_B = 1

  const giveManyPoints = (player, count = 1) => {
    for (let i = 0; i < count; i++) {
      game.givePoint(player)
    }
  }

  const makeDuce = () => {
    giveManyPoints(PLAYER_A, 3)
    giveManyPoints(PLAYER_B, 3)
  }

  beforeEach(() => {
    game = new TennisGame()
  })

  test('Test - is Game Initialized', () => {
    expect(game).not.toBe(undefined)
  })

  test('Test - givePoint to Player A', () => {
    game.givePoint(PLAYER_A)
    expect(game.getPlayer(PLAYER_A).getPoint()).toBe(15)
  })

  test('Test - checkDuce', () => {
    makeDuce()
    expect(game.checkDuce()).toBe(true)
  })

  test('Test - Player A get Adventage', () => {
    makeDuce()
    game.givePoint(PLAYER_A)
    expect(game.hasAdventage(game.getPlayer(PLAYER_A))).toBe(true)
  })

  test('Test - Player A Win on Perfect Game', () => {
    giveManyPoints(PLAYER_A, 4)
    expect(game.getWinner()).toBe(game.getPlayer(PLAYER_A))
  })

  test('Test - Player A Win on Duce', () => {
    makeDuce()
    giveManyPoints(PLAYER_A, 2)
    expect(game.getWinner()).toBe(game.getPlayer(PLAYER_A))
  })

  test('Test - Player B seize Adventage from Player A', () => {
    makeDuce()
    game.givePoint(PLAYER_A)
    giveManyPoints(PLAYER_B, 2)
    expect(game.hasAdventage(game.getPlayer(PLAYER_B))).toBe(true)
  })

  test('Test - Player B reverse Victory', () => {
    makeDuce()
    game.givePoint(PLAYER_A)
    giveManyPoints(PLAYER_B, 3)
    expect(game.getWinner()).toBe(game.getPlayer(PLAYER_B))
  })

  test('Test - Game already Over', () => {
    expect(() => giveManyPoints(PLAYER_A, 5)).toThrow()
  })
})

describe('TennisPlayer', () => {
  const PLAYER_NAME = 'Test Player'
  let player

  const takeManyPoints = (count) => {
    for (let i = 0; i < count; i++) {
      player.takePoint()
    }
  }

  beforeEach(() => {
    player = new TennisPlayer(PLAYER_NAME)
  })

  test('Test - is Player Initialized', () => {
    expect(player).not.toBe(undefined)
  })

  test('Test - Love', () => {
    expect(player.getPoint()).toBe(0)
  })

  test('Test - Fifteen', () => {
    takeManyPoints(1)
    expect(player.getPoint()).toBe(15)
  })

  test('Test - Thirty', () => {
    takeManyPoints(2)
    expect(player.getPoint()).toBe(30)
  })

  test('Test - Fourty', () => {
    takeManyPoints(3)
    expect(player.getPoint()).toBe(40)
  })

  test('Test - Already Max Score - Fourty', () => {
    takeManyPoints(4)
    expect(player.getPoint()).toBe(40)
  })
})
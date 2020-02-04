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
  beforeEach(() => {
    game = new TennisGame()
  })

  test('Test - is Game Initialized', () => {
    expect(game).not.toBe(undefined)
  })

  test('Test - addPoint to Player', () => {
    game.addPoint(PLAYER_A)
    expect(game.getPlayer(PLAYER_A).getPoint()).toBe(15)
  })
})

describe('TennisPlayer', () => {
  const PLAYER_NAME = 'Test Player'
  let player
  beforeEach(() => {
    player = new TennisPlayer(PLAYER_NAME)
  })

  test('Test - is Player Initialized', () => {
    expect(player).not.toBe(undefined)
  })

  test('Test - is Player name Setted', () => {
    expect(player.getName()).toBe(PLAYER_NAME)
  })

  test('Test - Love', () => {
    expect(player.getPoint()).toBe(0)
  })

  test('Test - Fifteen', () => {
    player.takePoint()
    expect(player.getPoint()).toBe(15)
  })

  test('Test - Thirty', () => {
    player.takePoint()
    player.takePoint()
    expect(player.getPoint()).toBe(30)
  })

  test('Test - Fourty', () => {
    player.takePoint()
    player.takePoint()
    player.takePoint()
    expect(player.getPoint()).toBe(40)
  })
})
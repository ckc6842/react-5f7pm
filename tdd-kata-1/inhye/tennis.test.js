let { Tennis, Player } = require('./tennis')
beforeEach(() => {
  tennis = new Tennis()
  player = new Player()
})
describe('Test Tennis Game', () => {
  test('Take playerA Field', () => {
    const currentScore = 40
    player.addPoint('A', currentScore)

    expect(player.getPlayerScore('A', currentScore)).toBe(40)
  })
  test('Take playerB Field', () => {
    const currentScore = 40
    player.addPoint('B', currentScore)

    expect(player.getPlayerScore('B',currentScore)).toBe(40)
  })
  test('Check Duce', () => {
    const currentScore = 40
    player.addPoint('A', currentScore)
    player.addPoint('B', currentScore)
    tennis.updateDuceStatus(player.checkDuce('A', 'B'))

    expect(tennis.isDuce).toBe(true)
  })
  test('PlayerA get advantage after duce', () => {
    player.addPoint('A', 40)
    player.addPoint('B', 40)
    tennis.updateDuceStatus(player.checkDuce('A', 'B'))

    player.addPoint('A', 10)

    let targetPlayer = player.findPlayerByComparePoint('A', 'B')
    //  Duce 이후 10점의 추가 점수를 얻은 A는 advantage를 얻는다.
    player.addAdvatage(targetPlayer)
    //  advantage를 얻으면 duce 상태를 초기화한다.
    tennis.updateDuceStatus(player.checkDuce('A', 'B'))

    expect(player.hasPlayerAdvantage('A')).toBe(true)
  })
  test('PlayerA Take Field After Get Advantage', () => {
    player.addPoint('A', 40)
    player.addPoint('B', 40)
    tennis.updateDuceStatus(player.checkDuce('A', 'B'))

    player.addPoint('A', 10)

    let targetPlayer = player.findPlayerByComparePoint('A', 'B')
    player.addAdvatage(targetPlayer)
    tennis.updateDuceStatus(player.checkDuce('A', 'B')) //  여기까지 A가 advantage를 얻음

    
    let playerA = 'A'
    let winner = ''
    //  1) A가 점수를 따면 A승리
    player.addPoint(playerA, 10)
    if (player.hasPlayerAdvantage(playerA)) {
      winner = playerA
    } else {
      //  2) B가 점수를 못따면 A 승리
      //  2-1) B가 점수를 따면 다시 듀스
      let isDuce = true
      tennis.updateDuceStatus(isDuce)
    }
    expect(winner).toBe('A')
  })
})
let { Tennis, Player } = require('./tennis')
beforeEach(() => {
  tennis = new Tennis()
})
describe('Test Tennis', () => {
  test('Take player A Field', () => {
    const currentScore = 15
    tennis.takeField('A', currentScore)
    expect(tennis.getPlayerScore('A')).toBe(15)
  })
})
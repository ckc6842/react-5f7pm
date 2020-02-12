describe('Test Tic Tac Toe Game', () => {
    var gameInstance = require('./Game.js')
    var game = new gameInstance()

    beforeEach(() => { game.clear() });

    test('Test Player Turn', () => {
        expect(game.currentPlayer()).toBe('O')
        game.mark(1, 1)
        expect(game.currentPlayer()).toBe('X')
        game.mark(1, 1)
        expect(game.currentPlayer()).toBe('X')
        game.mark(2, 2)
        expect(game.currentPlayer()).toBe('O')
        game.mark(3, 3)
        expect(game.currentPlayer()).toBe('O')
    });

    test('Test Winner', () => {
        
    })
})
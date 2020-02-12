describe('Score Test', ()=>{
    var game = require('./TennisGame.js');

    beforeEach(()=>{ game.clear() })

    test('Love Point Test', ()=>{
        var currentScore = game.getScore();
        expect(currentScore['PlayerA']).toBe(0);
        expect(currentScore['PlayerB']).toBe(0);
    })

    test('Get Point Test', ()=>{
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerB();

        var currentScore = game.getScore();

        expect(currentScore['PlayerA']).toBe(30);
        expect(currentScore['PlayerB']).toBe(15);
    })

    test('Get Point Test 2', ()=>{
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();

        var currentScore = game.getScore();
        expect(currentScore['PlayerA']).toBe(40);
    })
})

describe('Deuce Test', ()=>{
    var game = require('./TennisGame.js');

    beforeEach(()=>{ game.clear() })

    test('Deuce Condition Test', ()=>{
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerB();
        game.getPointToPlayerB();
        game.getPointToPlayerB();

        expect(game.isDeuce()).toBe(true);
    })

    test('Deuce Condition Test 2', ()=>{
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerB();
        game.getPointToPlayerB();
        game.getPointToPlayerB();

        game.getPointToPlayerA();
        game.getPointToPlayerB();

        expect(game.isDeuce()).toBe(true);
    })

    test('None Deuce Condition Test', ()=>{
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerB();
        game.getPointToPlayerB();
        game.getPointToPlayerB();

        game.getPointToPlayerA();
        game.getPointToPlayerA();

        expect(game.isDeuce()).toBe(false);
    })
})

describe('Game Play Test', ()=>{
    var game = require('./TennisGame.js');

    beforeEach(()=>{ game.clear() })

    test('Player A Win', ()=>{
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();

        expect(game.isGameFinished).toBe(true);
        expect(game.winner.name).toBe('A');
    })

    test('Player B Win', ()=>{
        game.getPointToPlayerB();
        game.getPointToPlayerB();
        game.getPointToPlayerB();
        game.getPointToPlayerB();

        expect(game.isGameFinished).toBe(true);
        expect(game.winner.name).toBe('B');
    })

    test('Play Not Finished', ()=>{
        game.getPointToPlayerB();
        game.getPointToPlayerB();
        game.getPointToPlayerB();

        game.getPointToPlayerA();
        game.getPointToPlayerA();
        game.getPointToPlayerA();

        expect(game.isGameFinished).toBe(false);
    })

    test('Deuce Not Finished', ()=>{
        for (var i = 0; i < 20; i++)
        {
            game.getPointToPlayerA();
            game.getPointToPlayerB();
        }

        expect(game.isGameFinished).toBe(false);
    })

    test('A Take Advantage', ()=>{
        for (var i = 0; i < 20; i++)
        {
            game.getPointToPlayerA();
            game.getPointToPlayerB();
        }

        game.getPointToPlayerA();

        expect(game.isGameFinished).toBe(false);
        expect(game.playerA.isAdvantage).toBe(true);
    })

    test('B Take Advantage', ()=>{
        for (var i = 0; i < 20; i++)
        {
            game.getPointToPlayerA();
            game.getPointToPlayerB();
        }

        game.getPointToPlayerB();

        expect(game.isGameFinished).toBe(false);
        expect(game.playerB.isAdvantage).toBe(true);
    })

    test('Deuce Play A Win', ()=>{
        for (var i = 0; i < 20; i++)
        {
            game.getPointToPlayerA();
            game.getPointToPlayerB();
        }

        game.getPointToPlayerA();
        game.getPointToPlayerA();

        expect(game.isGameFinished).toBe(true);
        expect(game.winner.name).toBe('A');
    })

    test('Deuce Play B Win', ()=>{
        for (var i = 0; i < 20; i++)
        {
            game.getPointToPlayerA();
            game.getPointToPlayerB();
        }

        game.getPointToPlayerB();
        game.getPointToPlayerB();

        expect(game.isGameFinished).toBe(true);
        expect(game.winner.name).toBe('B');
    })

})
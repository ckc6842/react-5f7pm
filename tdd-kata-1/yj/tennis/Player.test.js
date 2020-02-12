describe('Player Class Test', ()=>{
    var playerClass = require('./Player.js');
    var player = new playerClass();

    beforeEach(()=>{ player.clear() })

    test('Get Point Test', ()=>{
        expect(player.getScore()).toBe(0);
        player.addPoint();
        expect(player.getScore()).toBe(15);
        player.addPoint();
        expect(player.getScore()).toBe(30);
        player.addPoint();
        expect(player.getScore()).toBe(40);
    })

    test('Adventage Test', ()=>{
        expect(player.isAdvantage).toBe(false);
        player.setAdvantage(true);
        expect(player.isAdvantage).toBe(true);
        player.setAdvantage(false);
        expect(player.isAdvantage).toBe(false);
    })
})

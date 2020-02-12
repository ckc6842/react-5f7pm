describe('Test Basic Player Game', () => {
    var playerInstance = require('./Player.js')
    var player = new playerInstance()

    beforeEach(() => { player.clear() });

    test('Put Tile Test', () =>{
        expect(player.putTile(0, 0)).toBe(true);
        expect(player.putTile(0, 1)).toBe(true);
        expect(player.putTile(0, 2)).toBe(true);

        expect(player.putTile(1, 0)).toBe(true);
        expect(player.putTile(1, 1)).toBe(true);
        expect(player.putTile(1, 2)).toBe(true);

        expect(player.putTile(2, 0)).toBe(true);
        expect(player.putTile(2, 1)).toBe(true);
        expect(player.putTile(2, 2)).toBe(true);

        expect(player.putTile(0, 0)).toBe(false);
        expect(player.putTile(0, 1)).toBe(false);
        expect(player.putTile(0, 2)).toBe(false);

        expect(player.putTile(1, 0)).toBe(false);
        expect(player.putTile(1, 1)).toBe(false);
        expect(player.putTile(1, 2)).toBe(false);

        expect(player.putTile(2, 0)).toBe(false);
        expect(player.putTile(2, 1)).toBe(false);
        expect(player.putTile(2, 2)).toBe(false);

        expect(player.putTile(3, 1)).toBe(false);
        expect(player.putTile(1, 3)).toBe(false);
    })

    test('Row Bingo Test 0', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(0, 0)).toBe(true);
        expect(player.putTile(0, 1)).toBe(true);
        expect(player.putTile(0, 2)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

    test('Row Bingo Test 1', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(1, 0)).toBe(true);
        expect(player.putTile(1, 1)).toBe(true);
        expect(player.putTile(1, 2)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

    test('Row Bingo Test 2', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(2, 0)).toBe(true);
        expect(player.putTile(2, 1)).toBe(true);
        expect(player.putTile(2, 2)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

    test('Column Bingo Test 0', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(0, 0)).toBe(true);
        expect(player.putTile(1, 0)).toBe(true);
        expect(player.putTile(2, 0)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

    test('Column Bingo Test 1', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(0, 1)).toBe(true);
        expect(player.putTile(1, 1)).toBe(true);
        expect(player.putTile(2, 1)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

    test('Column Bingo Test 2', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(0, 2)).toBe(true);
        expect(player.putTile(1, 2)).toBe(true);
        expect(player.putTile(2, 2)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

    test('Dialogal Bingo Test 1', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(0, 0)).toBe(true);
        expect(player.putTile(1, 1)).toBe(true);
        expect(player.putTile(2, 2)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

    test('Dialogal Bingo Test 2', ()=>{
        expect(player.hasBingo()).toBe(false);

        expect(player.putTile(0, 2)).toBe(true);
        expect(player.putTile(1, 1)).toBe(true);
        expect(player.putTile(2, 0)).toBe(true);

        expect(player.hasBingo()).toBe(true);
    })

});
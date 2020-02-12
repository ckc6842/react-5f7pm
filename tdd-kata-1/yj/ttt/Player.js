class Player {
    constructor() {
        this.tileCount = 3;
        this.tiles = Array(9).fill(false);
    }

    clear() {
        this.tiles = Array(9).fill(false);
    }

    hasTile(row, column) {
        var checkIndex = (row * this.tileCount) + column
        if (checkIndex >= (this.tileCount * this.tileCount))
            return false;

        if (this.tiles[checkIndex] === true)
            return true;

        return false;
    }

    putTile(row, column) {
        var checkIndex = (row * this.tileCount) + column
        if (checkIndex >= (this.tileCount * this.tileCount))
            return false;

        if (this.hasTile(row, column))
            return false;

        this.tiles[checkIndex] = true;
        return true;
    }

    hasBingo() {
        // Row Bingo Test
        for (var i = 0; i < this.tileCount; i++) {
            if (this.tiles[i * this.tileCount] === true &&
                this.tiles[(i * this.tileCount) + 1] === true &&
                this.tiles[(i * this.tileCount) + 2] === true)
                return true;
        }

        // Column Bingo Test
        for (var i = 0; i < this.tileCount; i++) {
            if (this.tiles[this.tileCount + i] === true &&
                this.tiles[(1 * this.tileCount) + i] === true &&
                this.tiles[(2 * this.tileCount) + i] === true)
                return true;
        }

        // Diagonal Bingo Test
        if (this.tiles[0] === true &&
            this.tiles[4] === true &&
            this.tiles[8] === true)
            return true;

        if (this.tiles[2] === true &&
            this.tiles[4] === true &&
            this.tiles[6] === true)
            return true;

        return false;
    }
}

module.exports = Player;
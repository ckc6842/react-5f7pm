class Game {
    constructor() {
        var playerInstance = require('./Player.js')
        this.isFirstPlayerTurn = true;
        this.firstPlayer = new playerInstance;
        this.secondPlayer = new playerInstance;
    }

    clear() {
        this.isFirstPlayerTurn = true;
        this.firstPlayer.clear();
        this.secondPlayer.clear();
    }

    currentPlayer() {
        return this.isFirstPlayerTurn ? 'O' : 'X'
    }

    mark(row, column) {
        if (this.isFirstPlayerTurn) {
            if (this.secondPlayer.hasTile(row, column) === true)
                return false;

            if (this.firstPlayer.putTile(row, column) === false)
                return false;
        } else {
            if (this.firstPlayer.hasTile(row, column) === true)
                return false;

            if (this.secondPlayer.putTile(row, column) === false)
                return false;
        }

        this.isFirstPlayerTurn = !this.isFirstPlayerTurn
        this.checkWinner()
    }

    checkWinner() {
    }
}

module.exports = Game;

class TennisGame
{
    constructor() {
        var player = require('./player.js')
        this.playerA = new player();
        this.playerA.setName('A')
        this.playerB = new player();
        this.playerB.setName('B')
        this.isGameFinished = false;
        this.winner = {};
    }

    clear() {
        this.playerA.clear();
        this.playerB.clear();
        this.isGameFinished = false;
        this.winner = {};
    }

    setPlayerWin(player) {
        this.clear();
        this.winner = player;
        this.isGameFinished = true;
    }

    getPointToPlayerA() {
        if (this.isDeuce()) {
            if (this.playerA.isAdvantage) {
                this.setPlayerWin(this.playerA);
            }
            else {
                if (this.playerB.isAdvantage) {
                    this.playerB.setAdvantage(false);
                } else {
                    this.playerA.setAdvantage(true);
                }
            }
        } else {
            if (this.playerA.getScore() == 40) {
                this.setPlayerWin(this.playerA);
            } else {
                this.playerA.addPoint();
            }
        }
    }

    getPointToPlayerB() {
        if (this.isDeuce()) {
            if (this.playerB.isAdvantage) {
                this.setPlayerWin(this.playerB);
            }
            else {
                if (this.playerA.isAdvantage) {
                    this.playerA.setAdvantage(false);
                } else {
                    this.playerB.setAdvantage(true);
                }
            }
        } else {
            if (this.playerB.getScore() == 40) {
                this.setPlayerWin(this.playerB);
            } else {
                this.playerB.addPoint();
            }
        }
    }

    getScore() {
        return {
            'PlayerA' : this.playerA.getScore(),
            'PlayerB' : this.playerB.getScore(),
        }
    }

    isDeuce() {
        return  this.playerA.getScore() == 40 &&
                this.playerB.getScore() == 40;
    }

    isGameFinished() {
        return this.isGameFinished
    }
}

module.exports = new TennisGame
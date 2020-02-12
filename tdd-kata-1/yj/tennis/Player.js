class Player
{
    constructor() {
        this.point = 0;
        this.isAdvantage = false;
        this.name = '';
    }

    clear() {
        this.point = 0;
        this.isAdvantage = false;
    }

    addPoint() {
        if (this.point < 3)
            this.point++;
    }

    setName(name) {
        this.name = name;
    }

    getScore() {
        switch(this.point) {
            case 0 : return 0;
            case 1 : return 15;
            case 2 : return 30;
            case 3 : return 40;
        }

        return 0;
    }

    setAdvantage(bSet) {
        this.isAdvantage = bSet;
    }
}

module.exports = Player
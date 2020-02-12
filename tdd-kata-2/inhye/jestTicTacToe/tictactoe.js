// - 3 x 3 그리드를 가진 9개의 필드가 있다.
// - X, O 돌을 놓는 두 명의 플레이어가 있다.
// - 게임이 종료되기 전까지 플레이어들이 번갈아가면서 필드에 돌을 놓는다.
// - 이미 돌이 놓인 필드에는 돌을 놓을 수 없다.
// [게임 종료 조건]
// * 승리
// - 한 플레이어가 한 행의 모든 필드에 돌을 놓았을 때 ---> 012 / 345 / 678
// - 한 플레이어가 한 열의 모든 필드에 돌을 놓았을 때 ---> 036 / 147 / 258
// - 한 플레이어가 한 대각선의 모든 필드에 돌을 놓았을 때 ---> 048 / 246
// * 무승부
// - 마지막 필드에 돌이 놓일 때
class TicTacToe {
  constructor () {
    this.table = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]
    this.players = {
      0: new Player('Player A'),
      1: new Player('Player B'),
    }
    this.TABLE_SIZE= 3
  }
  generateRandomNumber (min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
  }
  takeField (playerId) {
    let randomColNumber = this.generateRandomNumber(0, this.TABLE_SIZE - 1)
    let randomRowNumber = this.generateRandomNumber(0, this.TABLE_SIZE - 1)
    //  필드가 비어 있으면 돌을 놓는다.
    if (this.table[randomColNumber][randomRowNumber] === -1) {
      this.table[randomColNumber][randomRowNumber] = playerId
    } else {
      //  필드가 놓여 있다면 다시 랜덤 숫자를 뽑는다.
      return this.takeField(playerId)
    }
  }
  takeOneField (colIndex, rowIndex, playerId) {
    if (this.table[colIndex][rowIndex] === -1) {
      this.table[colIndex][rowIndex] = playerId
    }
  }
  checkWinnerCondition (playerId) {
    let columnBingoObj = this.checkColumnRule(playerId)
    let rowBingoObj = this.checkRowRule(playerId)
    let crossBingoObj = this.checkCrossRule(playerId)
    console.log(this.table[0][0], '|', this.table[0][1], '|', this.table[0][2])
    console.log(this.table[1][0], '|', this.table[1][1], '|', this.table[1][2])
    console.log(this.table[2][0], '|', this.table[2][1], '|', this.table[2][2])

    return columnBingoObj.isBingo || rowBingoObj.isBingo || crossBingoObj.isBingo
  }
  checkColumnRule (playerId) {
    let placedFieldCount = 0
    for (let i = 0; i < this.TABLE_SIZE; i++) {
      placedFieldCount = 0
      for (let j = 0; j < this.TABLE_SIZE; j++) {
        //  뒷쪽 index가 바깥 루프
        //  앞쪽 index가 안쪽 루프
        //  0,0 0,1 0,2
        //  1,0 1,1 1,2
        //  2,0 2,1 2,2
        if (this.table[j][i] === playerId) {  //  [j][i] 순서를 바꿔써서 디버깅이 어려웠음
          placedFieldCount++
        }
      }
      if (placedFieldCount === this.TABLE_SIZE) {
        return {
          isBingo: true,
          winner: playerId,
        }
      }
    }
    return {
      isBingo: false,
      winner: null,
    }
  }
  checkRowRule (playerId) {
    let placedFieldCount = 0
    for (let i = 0; i < this.TABLE_SIZE; i++) {
      placedFieldCount = 0
      for (let j = 0; j < this.TABLE_SIZE; j++) {
        if (this.table[i][j] === playerId) {
          placedFieldCount++
        }
      }
      if (placedFieldCount === this.TABLE_SIZE) {
        return {
          isBingo: true,
          winner: playerId,
        }
      }
    }
    return {
      isBingo: false,
      winner: null,
    }
  }
  checkCrossRule (playerId) {
    let leftCrossFieldCount = 0
    for (let i = 0; i < this.TABLE_SIZE; i++) {
      if (this.table[i][i] === playerId) {
        leftCrossFieldCount++
      }
    }
    if (leftCrossFieldCount === this.TABLE_SIZE) {
      return {
        isBingo: true,
        winner: playerId,
      }
    }
    let rightCrossFieldCount = 0
    for (let i = 0; i < this.TABLE_SIZE; i++) {
      if (this.table[i][(this.TABLE_SIZE - 1)- i] === playerId) {
        rightCrossFieldCount++
      }
    }
    if (rightCrossFieldCount === this.TABLE_SIZE) {
      return {
        isBingo: true,
        winner: playerId,
      }
    }
    return {
      isBingo: false,
      winner: null,
    }
  }
}

class Player {
  constructor (name) {
    this.name = name
  }
}

module.exports = {
  TicTacToe,
  Player,
}
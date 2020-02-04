const points = [
  0,
  15,
  30,
  40
]

class Player {
  constructor (name) {
    this.name = name
    this.pointCount = 0
  }

  getPoint() {
    return points[this.pointCount]
  }

  getPointCount() {
    return this.pointCount
  }

  addPoint() {
    if (this.pointCount >= points.length - 1) return 

    this.pointCount += 1
  }
}

module.exports = Player;
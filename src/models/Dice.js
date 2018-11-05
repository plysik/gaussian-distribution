class Dice {
  constructor(max = 6, min = 1) {
    this.max = max;
    this.min = min;
  }
  roll() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}

export default Dice;

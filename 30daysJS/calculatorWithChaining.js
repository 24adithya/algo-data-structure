class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.number = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    if (value !== undefined && value !== null) this.number += value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    if (value !== undefined && value !== null) this.number -= value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    if (value !== undefined && value !== null) this.number *= value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value !== undefined && value !== null) {
      if (value === 0) this.number = Infinity;

      this.number /= value;
    }

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    if (value !== undefined && value !== null) {
      this.number **= value;
    }

    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    if (this.number === Infinity) return 'Division by zero is not allowed';

    return this.number;
  }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()); // 10 + 5 - 7 = 8
console.log(new Calculator(2).multiply(5).power(2).getResult()); // (2 * 5) ^ 2 = 100
console.log(new Calculator(20).divide(0).getResult()); // 20 / 0

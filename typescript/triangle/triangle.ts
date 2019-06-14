export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind() {
    const a = this.sides[0];
    const b = this.sides[1];
    const c = this.sides[2];

    // Side length is 0 or more
    if (this.sides.some(len => len <= 0)) throw new Error();

    // The length of any side is less than the sum of the lengths of the other two sides
    if (a + b < c || a + c < b || b + c < a) throw new Error();

    if (a === b && b === c) {
      return 'equilateral';
    }

    if (a === b || b === c || a === c) {
      return 'isosceles';
    }

    return 'scalene';
  }
}

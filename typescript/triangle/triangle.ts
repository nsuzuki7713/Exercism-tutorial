export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind() {
    const [a, b, c] = this.sides;

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

// 他の人の解答
// export default class Triangle {
//   sides: number[];

//   constructor(...sides: number[]) {
//     this.sides = sides.sort((a, b) => a - b);
//   }

//   kind() {
//     let [a, b, c] = this.sides;
//     if (a + b <= c) throw new Error();
//     if (a === c) return 'equilateral';
//     if (a === b || b === c) return 'isosceles';
//     return 'scalene';
//   }
// }

// 自分の解答
// export default class Squares {
//   public squareOfSum: number;
//   public sumOfSquares: number;
//   public difference: number;
//   constructor(n: number) {
//     let tmpSum = 0;
//     this.sumOfSquares = 0;
//     for (let i = 1; i <= n; i++) {
//       tmpSum += i;
//       this.sumOfSquares += Math.pow(i, 2);
//     }
//     this.squareOfSum = Math.pow(tmpSum, 2);
//     this.difference = this.squareOfSum - this.sumOfSquares;
//   }
// }

// 他の人の解答①
function makeRange(n: number, offset: number = 1): Array<number> {
  return [...Array(n).keys()].map(n => n + offset);
}
function squareOfSum(upperLim: number): number {
  const sum = makeRange(upperLim).reduce((acc, n) => acc + n, 0);
  return Math.pow(sum, 2);
}

function sumOfSquares(upperLim: number): number {
  return makeRange(upperLim).reduce((acc, n) => acc + Math.pow(n, 2), 0);
}

export default class Squares {
  public squareOfSum: number;
  public sumOfSquares: number;
  public difference: number;
  constructor(upperLim: number) {
    this.squareOfSum = squareOfSum(upperLim);
    this.sumOfSquares = sumOfSquares(upperLim);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}

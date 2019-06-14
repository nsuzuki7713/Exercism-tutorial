export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind() {
    const a = this.sides[0];
    const b = this.sides[1];
    const c = this.sides[2];

    // 辺の長さは0以上
    if (this.sides.some(v => v <= 0)) throw new Error();

    // どの辺の長さも他の二辺の長さの和より小さい
    if (a + b < c || a + c < b || b + c < a) throw new Error();

    // 正三角形
    if (a === b && b === c) {
      return 'equilateral';
    }

    // 二等辺三角形
    if (a === b || b === c || a === c) {
      return 'isosceles';
    }
    // 不等辺三角形
    return 'scalene';
  }
}

class CollatzConjecture {
  public static count = 0;
  static steps(n: number): number {
    if (n < 1) throw new Error('Only positive numbers are allowed');

    if (n === 1) {
      const ret = this.count;
      this.count = 0;
      return ret;
    }

    this.count++;
    const newN = n % 2 === 0 ? n / 2 : 3 * n + 1;
    return this.steps(newN);
  }
}

export default CollatzConjecture;

// 他の人の解答
// class CollatzConjecture {
//   static steps(n: number, count: number = 0): number {
//     if (n <= 0) {
//       throw new Error('Only positive numbers are allowed');
//     }
//     if (n === 1) {
//       return count;
//     }
//     if (n % 2 === 0) {
//       return this.steps(n / 2, (count += 1));
//     }
//     return this.steps(n * 3 + 1, (count += 1));
//   }
// }

// export default CollatzConjecture;

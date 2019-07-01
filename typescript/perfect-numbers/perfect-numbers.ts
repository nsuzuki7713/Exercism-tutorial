export default class PerfectNumbers {
  static classify(n: number): string {
    if (n < 1) {
      throw new Error('Classification is only possible for natural numbers.');
    }
    const serialNumbers = [...Array(n - 1).keys()].map(i => ++i);
    const result = serialNumbers.reduce((acc, cur) => {
      if (n % cur === 0) {
        return acc + cur;
      }
      return acc;
    }, 0);
    if (result === n) {
      return 'perfect';
    } else if (result < n) {
      return 'deficient';
    } else {
      return 'abundant';
    }
  }

  // 他の人の解答
  // static classify(value: number): string {
  //   if (value <= 0) {
  //     throw new Error('Classification is only possible for natural numbers.');
  //   }
  //   var sum = 0;
  //   for (let i = 1; i <= value / 2; i++) {
  //     if (value % i === 0) {
  //       sum += i;
  //     }
  //   }
  //   if (sum == value) {
  //     return 'perfect';
  //   } else if (sum > value) {
  //     return 'abundant';
  //   } else {
  //     return 'deficient';
  //   }
  // }
}

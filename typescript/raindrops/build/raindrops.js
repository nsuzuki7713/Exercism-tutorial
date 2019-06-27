"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Raindrops {
    convert(n) {
        let result = '';
        if (n % 3 === 0) {
            result += 'Pling';
        }
        if (n % 5 === 0) {
            result += 'Plang';
        }
        if (n % 7 === 0) {
            result += 'Plong';
        }
        if (result === '') {
            result = String(n);
        }
        return result;
    }
}
exports.default = Raindrops;
// 他の人の解答
// export default class Raindrops {
//   private readonly map: { [num: number]: string } = {
//     3: 'Pling',
//     5: 'Plang',
//     7: 'Plong'
//   };
//   convert(number: number): string {
//     let result = '';
//     for (let i in this.map) {
//       if (number % Number(i) === 0) {
//         result += this.map[i];
//       }
//     }
//     return result.length !== 0 ? result : number.toString();
//   }
// }
//# sourceMappingURL=raindrops.js.map
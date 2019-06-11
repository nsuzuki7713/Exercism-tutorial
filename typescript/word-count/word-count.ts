// export default class Words {
//   count(phrase: string) {
//     let arrayWords = phrase.split(/[\s]/);
//     const counts = new Map<string, number>();

//     arrayWords.forEach(word => {
//       word = word.toLowerCase();
//       if (word === '') return;
//       if (counts.get(word) === undefined) {
//         counts.set(word, 0);
//       }
//       counts.set(word, (counts.get(word) as number) + 1);
//     });

//     return counts;
//   }
// }

// 他の人の解答
class Words {
  count(s: string): Map<string, number> {
    let words = s
      .trim()
      .toLowerCase()
      .split(/\s+/);
    let counted = new Map<string, number>();
    words.forEach(word => {
      let oldValue = counted.get(word) || 0;
      counted.set(word, oldValue + 1);
    });
    return counted;
  }
}

export default Words;

export default class Pangram {
  constructor(private pangram: string) {}
  isPangram(): boolean {
    let alphabets: { [key: string]: boolean } = {};
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(key => {
      alphabets[key] = false;
    });
    const len = this.pangram.length;
    for (let i = 0; i < len; i++) {
      const targetStr = this.pangram[i].toLocaleLowerCase();
      if (targetStr in alphabets) {
        alphabets[targetStr] = true;
      }
    }
    for (let key of Object.keys(alphabets)) {
      if (!alphabets[key]) {
        return false;
      }
    }
    return true;
  }

  // 他の人の解答
  // constructor(private phrase: string) {}
  // isPangram(): boolean {
  //   let phraseSet = new Set(this.phrase.toLowerCase());
  //   let alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
  //   for (let letter of alphabet) {
  //     if (!phraseSet.has(letter)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // 他の人の解答
  // constructor(private str: string) {}
  // isPangram = (): boolean =>
  //   new Set(
  //     this.str
  //       .toLowerCase()
  //       .split('')
  //       .filter((c: string) => /[a-z]/.test(c))
  //   ).size === 26;
}

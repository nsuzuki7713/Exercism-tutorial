class Isogram {
  static isIsogram(word: string) {
    const trimWord = word.replace(/-/g, '').replace(/ /g, '');
    const wordArray = trimWord.toLocaleLowerCase().split('');
    if (new Set(wordArray).size === trimWord.length) {
      return true;
    }
    return false;
  }

  // 他の人の解答
  // static isIsogram(string: string): boolean {
  //   const characters = string.toLowerCase().match(/[a-z]/g) || [];
  //   const characterSet = new Set<String>(characters);
  //   return characterSet.size === characters.length;
  // }
}

export default Isogram;

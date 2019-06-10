export default class Words {
  count(phrase: string) {
    let arrayWords = phrase.split(/[\s]/);
    const counts: { [key: string]: number } = {};

    arrayWords.forEach(v => {
      v = v.toLowerCase();
      if (v === '') return;
      counts[v] = counts[v] ? counts[v] + 1 : 1;
    });

    return new Map(Object.entries(counts));
  }
}

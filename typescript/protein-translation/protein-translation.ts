class ProteinTranslation {
  static proteinMap = new Map<string, string>([
    ['AUG', 'Methionine'],
    ['UUU', 'Phenylalanine'],
    ['UUC', 'Phenylalanine'],
    ['UUA', 'Leucine'],
    ['UUG', 'Leucine'],
    ['UCU', 'Serine'],
    ['UCC', 'Serine'],
    ['UCA', 'Serine'],
    ['UCG', 'Serine'],
    ['UAU', 'Tyrosine'],
    ['UAC', 'Tyrosine'],
    ['UGU', 'Cysteine'],
    ['UGC', 'Cysteine'],
    ['UGG', 'Tryptophan'],
    ['UAA', 'STOP'],
    ['UAG', 'STOP'],
    ['UGA', 'STOP']
  ]);

  static proteins(rna: string): string[] {
    let proteinArray: string[] = [];
    for (let i = 0; i < rna.length / 3; i++) {
      const cdn = rna.substr(i * 3, 3);
      const protein = ProteinTranslation.proteinMap.get(cdn);

      if (!protein || protein === 'STOP') {
        return proteinArray;
      }

      proteinArray.push(protein);
    }

    return proteinArray;
  }

  // 他の人の解答
  // static proteins(str: string): string[] {
  //   const result: string[] = [];
  //   for (const group of str.match(/.{3}/g) || []) {
  //     const match = ProteinTranslation.proteinMap.get(group);
  //     if (!match || match !== 'STOP') {
  //       result.push(match || '');
  //     } else {
  //       break;
  //     }
  //   }
  //   return result;
  // }
}

export default ProteinTranslation;

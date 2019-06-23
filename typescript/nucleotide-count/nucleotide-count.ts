class NucleotideCount {
  static nucleotideCounts(dna: string) {
    let result: { [key: string]: number } = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    dna.split('').forEach(v => {
      if (typeof result[v] === 'undefined') {
        throw new Error('Invalid nucleotide in strand');
      }

      result[v] = result[v] + 1;
    });

    return result;
  }
}

export default NucleotideCount;

export default class Hamming {
  compute(dna: string, cdna: string): number {
    if (dna.length !== cdna.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let distance = 0;
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] !== cdna[i]) {
        distance = distance + 1;
      }
    }
    return distance;
  }
}

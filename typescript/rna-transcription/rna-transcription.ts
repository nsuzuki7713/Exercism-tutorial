class Transcriptor {
  toRna(rna: string) {
    return rna
      .split('')
      .map(v => {
        switch (v) {
          case 'G':
            return 'C';
          case 'C':
            return 'G';
          case 'T':
            return 'A';
          case 'A':
            return 'U';
          default:
            throw new Error('Invalid input DNA.');
        }
      })
      .join('');
  }
}

export default Transcriptor;

// 他の人の解答
// class Transcriptor {
//   private static dna2RNAMap: { [key: string]: string } = {
//     C: 'G',
//     G: 'C',
//     A: 'U',
//     T: 'A'
//   };

//   toRna = (s: string): string => {
//     return s
//       .split('')
//       .map(c => {
//         return Transcriptor.dna2RNAMap[c] || this.raiseError();
//       })
//       .join('');
//   };

//   private raiseError = (): Error => {
//     throw new Error('Invalid input DNA.');
//   };
// }

// export default Transcriptor;

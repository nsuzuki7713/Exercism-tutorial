class Matrix {
  public readonly rows: number[][];
  public readonly columns: number[][];

  constructor(matrix: string) {
    this.rows = matrix
      .split('\n')
      .map(row => row.split(' ').map(v => Number(v)));

    this.columns = Object.keys(this.rows[0]).map(c =>
      this.rows.map(r => r[Number(c)])
    );
  }
}

export default Matrix;

class SaddlePoints {
  static saddlePoints(matrix: number[][]) {
    console.log(matrix);
    const row = matrix.length;
    // const col = matrix[0].length;

    for (let i = 0; i < row; i++) {
      console.log(maxIndex(matrix[i]));
    }
  }
}

function maxIndex(rows: number[]) {
  let index = 0;
  let value = -Infinity;
  for (let i = 0, len = rows.length; i < len; i++) {
    if (value < rows[i]) {
      value = rows[i];
      index = i;
    }
  }
  return index;
}

export default SaddlePoints;

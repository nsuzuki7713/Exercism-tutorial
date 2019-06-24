class Allergies {
  private score: number;
  constructor(score: number) {
    this.score = score;
  }

  allergicTo(item: string): boolean {
    let tempScore = this.score;
    if (tempScore >= 128) {
      tempScore = tempScore - 128;
      if (item === 'cats') {
        return true;
      }
    }

    if (tempScore >= 64) {
      tempScore = tempScore - 64;
      if (item === 'pollen') {
        return true;
      }
    }

    if (tempScore >= 32) {
      tempScore = tempScore - 32;
      if (item === 'chocolate') {
        return true;
      }
    }

    if (tempScore >= 16) {
      tempScore = tempScore - 16;
      if (item === 'tomatoes') {
        return true;
      }
    }

    if (tempScore >= 8) {
      tempScore = tempScore - 8;
      if (item === 'strawberries') {
        return true;
      }
    }

    if (tempScore >= 4) {
      tempScore = tempScore - 4;
      if (item === 'shellfish') {
        return true;
      }
    }

    if (tempScore >= 2) {
      tempScore = tempScore - 2;
      if (item === 'peanuts') {
        return true;
      }
    }

    if (tempScore >= 1) {
      tempScore = tempScore - 1;
      if (item === 'eggs') {
        return true;
      }
    }

    return false;
  }
  list(): string[] {
    let result: string[] = [];
    let tempScore = this.score;

    if (tempScore >= 256) {
      tempScore = tempScore - 256;
    }

    if (tempScore >= 128) {
      tempScore = tempScore - 128;
      result.push('cats');
    }

    if (tempScore >= 64) {
      tempScore = tempScore - 64;
      result.push('pollen');
    }

    if (tempScore >= 32) {
      tempScore = tempScore - 32;
      result.push('chocolate');
    }

    if (tempScore >= 16) {
      tempScore = tempScore - 16;
      result.push('tomatoes');
    }

    if (tempScore >= 8) {
      tempScore = tempScore - 8;
      result.push('strawberries');
    }

    if (tempScore >= 4) {
      tempScore = tempScore - 4;
      result.push('shellfish');
    }

    if (tempScore >= 2) {
      tempScore = tempScore - 2;
      result.push('peanuts');
    }

    if (tempScore >= 1) {
      tempScore = tempScore - 1;
      result.push('eggs');
    }

    return result.reverse();
  }
}

export default Allergies;

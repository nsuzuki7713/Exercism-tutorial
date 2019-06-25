class Allergies {
  private allergies: string[] = [];
  private readonly food: { [key: string]: number } = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128
  };

  constructor(score: number) {
    for (const key in this.food) {
      const foodScore = this.food[key];

      // ビット論理積(ビットマスクして計算)
      if (score & foodScore) {
        this.allergies.push(key);
      }
    }
  }

  allergicTo(item: string): boolean {
    return this.allergies.includes(item);
  }
  list(): string[] {
    return this.allergies;
  }
}

export default Allergies;

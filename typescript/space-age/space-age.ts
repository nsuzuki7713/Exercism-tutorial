export default class SpaceAge {
  private readonly _seconds: number;

  constructor(second: number) {
    this._seconds = second;
  }

  get seconds() {
    return this._seconds;
  }

  onEarth(): number {
    return Math.round((this._seconds / 31557600) * 100) / 100;
  }
  onMercury(): number {
    return Math.round((this.onEarth() / 0.2408467) * 100) / 100;
  }
  onVenus(): number {
    return Math.floor((this.onEarth() / 0.61519726) * 100) / 100;
  }
  onMars(): number {
    return Math.round((this.onEarth() / 1.8808158) * 100) / 100;
  }
  onJupiter(): number {
    return Math.round((this.onEarth() / 11.862615) * 100) / 100;
  }
  onSaturn(): number {
    return Math.round((this.onEarth() / 29.447498) * 100) / 100;
  }
  onUranus(): number {
    return Math.round((this.onEarth() / 84.016846) * 100) / 100;
  }
  onNeptune(): number {
    return Math.round((this.onEarth() / 164.79132) * 100) / 100;
  }
}

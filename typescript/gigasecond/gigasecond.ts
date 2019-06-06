class Gigasecond {
  private dt: Date;
  constructor(date: Date ) {
    this.dt = new Date(date.getTime() + 1000e9);
  }

  date() {
    return this.dt;
  } 
}

export default Gigasecond

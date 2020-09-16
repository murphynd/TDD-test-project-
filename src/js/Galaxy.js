export default class Galaxy {
  constructor() {
    this.planets = [];
  }
  addPlanet(planet) {
    this.planets.push(planet);
  }
  findPlanet(planet) {
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        return this.planets[i];
      }
    }
  }
  addHumanAge(planet, numinput) {
    let num = parseFloat(numinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        this.planets[i].humanYears = Math.trunc(
          (num *= this.planets[i].earthYears)
        );
        return this.planets[i];
      }
    }
    return "not in the Galaxy";
  }
  galactic(planetInput, ageinput, lifeinput) {
    let age = parseFloat(ageinput);
    let life = parseFloat(lifeinput);
    let isThere = false;
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet === planetInput) {
        isFalse = true;
        console.log(this.planets[i].planet);
        this.planets[i].humanYears = Math.trunc(
          (age *= this.planets[i].earthYears)
        );
        if (this.planets[i].humanYears < life) {
          return (
            "you are alive at the ripe age of " + this.planets[i].humanYears
          );
        }
        if (this.planets[i].humanYears >= life) {
          return (
            "you should be dead at the ripe age of " +
            this.planets[i].humanYears
          );
        }
      }
    }
    if (isThere === false) {
      return; //whatever
    }
  }
}

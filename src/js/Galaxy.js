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
}

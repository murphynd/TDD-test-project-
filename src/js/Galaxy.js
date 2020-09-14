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
}

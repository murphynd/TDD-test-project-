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
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet === planetInput) {
        this.planets[i].humanYears = Math.trunc(
          (age *= this.planets[i].earthYears)
        );
        this.planets[i].lifexp = Math.trunc(
          (life *= this.planets[i].earthYears)
        );
        if (this.planets[i].humanYears < life) {
          return (
            "You are alive at the ripe age of " +
            this.planets[i].humanYears +
            " with only " +
            this.planets[i].lifexp +
            " left to live!"
          );
        } else {
          return (
            "you should be dead at the age of " +
            this.planets[i].lifexp +
            "but you have lived on to the age of " +
            this.planets[i].humanYears
          );
        }
      }
    }
    return "not in the Galaxy";
  }
}

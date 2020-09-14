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
  lifeExp(planet, ageinput, lifeinput) {
    let age = parseFloat(ageinput);
    let life = parseFloat(lifeinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        this.planets[i].humanYears = Math.trunc(
          (age *= this.planets[i].earthYears)
        );
        if (this.planets[i].humanYears < life) {
          return "you are alive!";
        } else
          return "you should be dead but I guess space is treating you well.";
      }
      return "not in the Galaxy";
    }
  }
  Dead(planet, ageinput, lifeinput) {
    let age = parseFloat(ageinput);
    let life = parseFloat(lifeinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        this.planets[i].humanYears = Math.trunc(
          (age *= this.planets[i].earthYears)
        );
        if (this.planets[i].humanYears < life) {
          return "you are alive!";
        } else return (this.planets[i].humanYears -= life);
      }
      return "not in the Galaxy";
    }
  }
  Galactic(planet, ageinput, lifeinput) {
    let age = parseFloat(ageinput);
    let life = parseFloat(lifeinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        this.planets[i].humanYears = Math.trunc(
          (age *= this.planets[i].earthYears)
        );
        if (this.planets[i].humanYears < life) {
          return (
            "you are alive at the ripe age of " + this.planets[i].humanYears
          );
        } else
          return (
            "you should be dead at the ripe age of " +
            (this.planets[i].humanYears -= life)
          );
      }
      return "not in the Galaxy";
    }
  }
}

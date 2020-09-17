export default class Galaxy {
  constructor() {
    this.planets = [];
  }
  addPlanet(planet) {
    this.planets.push(planet);
  }
  findPlanet(planet) {
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planetName == planet) {
        return this.planets[i];
      }
    }
  }
  galactic(planetInput, ageinput, lifeinput) {
    let num = parseFloat(ageinput);
    let life = parseFloat(lifeinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planetName === planetInput) {
        this.planets[i].earthAge = num;
        this.planets[i].earthLifexp = life;
        this.planets[i].ageByPlanet = Math.trunc(
          this.planets[i].earthAge / this.planets[i].planetYear
        );
        this.planets[i].planetLifexp = Math.trunc(
          this.planets[i].earthLifexp / this.planets[i].planetYear
        );
        this.planets[i].tillDead = Math.trunc(
          this.planets[i].planetLifexp - this.planets[i].ageByPlanet
        );
        if (this.planets[i].ageByPlanet < this.planets[i].planetLifexp) {
          return (
            "You are alive at the ripe age of " +
            this.planets[i].ageByPlanet +
            " with only " +
            this.planets[i].tillDead +
            " left to live!"
          );
        } else {
          return (
            "you should be dead at the age of " +
            this.planets[i].planetLifexp +
            " but you have lived on to the age of " +
            this.planets[i].ageByPlanet
          );
        }
      }
    }
    return "not in the Galaxy";
  }
}

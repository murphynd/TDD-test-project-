import Galaxy from "../src/js/Galaxy.js";
import Planet from "../src/js/Planet.js";

describe("Galaxy", () => {
  let myGalaxy;
  let Mars;
  let Mercury;
  let Venus;

  beforeEach(() => {
    myGalaxy = new Galaxy();
    Mars = new Planet("Mars", 1.88);
    Mercury = new Planet("Mercury", 0.24);
    Venus = new Planet("Venus", 0.62);
  });
  test("create class Galaxy to hold array of multiple planets", () => {
    expect(myGalaxy.planets).toEqual([]);
  });
  test("create method for class Galaxy to add planets", () => {
    myGalaxy.addPlanet("mars");
    expect(myGalaxy.planets).toEqual(["mars"]);
  });
  test("this will test if planet objects register in galexy array", () => {
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    expect(myGalaxy.planets).toEqual([Mars, Mercury, Venus]);
    expect(myGalaxy.planets).toHaveLength(3);
  });
  test("create a method for class galexy to search planets objects", () => {
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    myGalaxy.findPlanet("Venus");
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      earthYears: 0.62,
      humanYears: 0,
      planet: "Venus",
    });
  });
  test("add inputted age to update all of the planets in Galaxy Array", () => {
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    myGalaxy.addHumanAge("Venus", 30);
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      earthYears: 0.62,
      humanYears: 18,
      planet: "Venus",
    });
  });
});

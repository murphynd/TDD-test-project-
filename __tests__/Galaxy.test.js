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

  test("add inputted age to update all of the planets in Galaxy Array and tell when a planet is not in the galaxy", () => {
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    myGalaxy.addHumanAge("pluto", 30);
    expect(myGalaxy.addHumanAge("pluto")).toEqual("not in the Galaxy");
  });
  test("This will take an input of life expentancy and tell the user if they would still be alive.", () => {
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    myGalaxy.lifeExp("Mars", 15, 72);
    expect(myGalaxy.lifeExp("Mars", 15, 72)).toEqual("you are alive!");
  });
  test("This will take an input of life expentancy and tell the user if they are dead.", () => {
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    myGalaxy.lifeExp("Mars", 200, 72);
    expect(myGalaxy.lifeExp("Mars", 200, 72)).toEqual(
      "you should be dead but I guess space is treating you well."
    );
  });
  test("This will take an input wrong planet and tell user it is not in the Galaxy", () => {
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    myGalaxy.lifeExp("Pluto", 200, 72);
    expect(myGalaxy.lifeExp("Pluto", 200, 72)).toEqual("not in the Galaxy");
  });
});

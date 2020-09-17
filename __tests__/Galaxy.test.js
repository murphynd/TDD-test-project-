import Galaxy from "../src/js/Galaxy.js";
import Planet from "../src/js/Planet.js";

describe("Galaxy", () => {
  let myGalaxy;
  let Mars;
  let Mercury;
  let Venus;
  let Jupiter;
  let Saturn;

  beforeEach(() => {
    myGalaxy = new Galaxy();
    Mars = new Planet("Mars", 1.88);
    Mercury = new Planet("Mercury", 0.24);
    Venus = new Planet("Venus", 0.62);
    Jupiter = new Planet("Jupiter", 11.8);
    Saturn = new Planet("Saturn", 29.45);
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
    myGalaxy.addPlanet(Jupiter);
  });
  test("TEST 1 create method for class Galaxy to add planets", () => {
    myGalaxy.addPlanet(Saturn);
    expect(myGalaxy.planets).toEqual([Mars, Mercury, Venus, Jupiter, Saturn]);
  });
  test("TEST 2 this will test if planet objects register in galexy array", () => {
    expect(myGalaxy.planets).toEqual([Mars, Mercury, Venus, Jupiter]);
    expect(myGalaxy.planets).toHaveLength(4);
  });
  test("TEST 3 create a method for class galexy to search planets objects", () => {
    myGalaxy.findPlanet("Venus");
    myGalaxy.findPlanet("Mercury");
    myGalaxy.findPlanet("Jupiter");
    myGalaxy.findPlanet("Mars");
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      planetName: "Venus",
      planetYear: 0.62,
      ageByPlanet: 0,
      planetLifexp: 0,
      earthLifexp: 0,
      earthAge: 0,
      tillDead: 0,
    });
    expect(myGalaxy.findPlanet("Mercury")).toEqual({
      planetName: "Mercury",
      planetYear: 0.24,
      ageByPlanet: 0,
      planetLifexp: 0,
      earthLifexp: 0,
      earthAge: 0,
      tillDead: 0,
    });
    expect(myGalaxy.findPlanet("Jupiter")).toEqual({
      planetName: "Jupiter",
      planetYear: 11.8,
      ageByPlanet: 0,
      planetLifexp: 0,
      earthLifexp: 0,
      earthAge: 0,
      tillDead: 0,
    });
    expect(myGalaxy.findPlanet("Mars")).toEqual({
      planetName: "Mars",
      planetYear: 1.88,
      ageByPlanet: 0,
      planetLifexp: 0,
      earthLifexp: 0,
      earthAge: 0,
      tillDead: 0,
    });
  });
  test("TEST 4 this will check planet input after galatic is run", () => {
    myGalaxy.galactic("Venus", 30, 72);
    myGalaxy.galactic("Mercury", 30, 72);
    myGalaxy.galactic("Jupiter", 30, 72);
    myGalaxy.galactic("Mars", 30, 72);
    expect(myGalaxy.findPlanet("Mars")).toEqual({
      planetName: "Mars",
      planetYear: 1.88,
      ageByPlanet: 15,
      planetLifexp: 38,
      earthLifexp: 72,
      earthAge: 30,
      tillDead: 23,
    });
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      planetName: "Venus",
      planetYear: 0.62,
      ageByPlanet: 48,
      planetLifexp: 116,
      earthLifexp: 72,
      earthAge: 30,
      tillDead: 68,
    });
    expect(myGalaxy.findPlanet("Mercury")).toEqual({
      planetName: "Mercury",
      planetYear: 0.24,
      ageByPlanet: 125,
      planetLifexp: 300,
      earthLifexp: 72,
      earthAge: 30,
      tillDead: 175,
    });
    expect(myGalaxy.findPlanet("Jupiter")).toEqual({
      planetName: "Jupiter",
      planetYear: 11.8,
      ageByPlanet: 2,
      planetLifexp: 6,
      earthLifexp: 72,
      earthAge: 30,
      tillDead: 4,
    });
  });
  test("TEST 5 This will take an input of life expentancy and tell the user if they would still be alive.", () => {
    myGalaxy.galactic("Venus", 5, 72);
    myGalaxy.galactic("Mercury", 5, 72);
    myGalaxy.galactic("Jupiter", 5, 72);
    myGalaxy.galactic("Mars", 5, 72);

    expect(myGalaxy.galactic("Venus", 5, 72)).toEqual(
      "You are alive at the ripe age of 8 with only 108 left to live!"
    );
    expect(myGalaxy.galactic("Mercury", 5, 72)).toEqual(
      "You are alive at the ripe age of 20 with only 280 left to live!"
    );
    expect(myGalaxy.galactic("Jupiter", 5, 72)).toEqual(
      "You are alive at the ripe age of 0 with only 6 left to live!"
    );
    expect(myGalaxy.galactic("Mars", 5, 72)).toEqual(
      "You are alive at the ripe age of 2 with only 36 left to live!"
    );
  });
  test("TEST 6 This will take an input of life expentancy and tell the user if they are dead.", () => {
    myGalaxy.galactic("Venus", 500, 72);
    myGalaxy.galactic("Mercury", 500, 72);
    myGalaxy.galactic("Jupiter", 500, 72);
    myGalaxy.galactic("Mars", 500, 72);
    expect(myGalaxy.galactic("Venus", 500, 72)).toEqual(
      "you should be dead at the age of 116 but you have lived on to the age of 806"
    );
    expect(myGalaxy.galactic("Mercury", 500, 72)).toEqual(
      "you should be dead at the age of 300 but you have lived on to the age of 2083"
    );
    expect(myGalaxy.galactic("Jupiter", 500, 72)).toEqual(
      "you should be dead at the age of 6 but you have lived on to the age of 42"
    );
    expect(myGalaxy.galactic("Mars", 500, 72)).toEqual(
      "you should be dead at the age of 38 but you have lived on to the age of 265"
    );
  });
  test("TEST 7 This will take an input wrong planet and tell user it is not in the Galaxy", () => {
    myGalaxy.galactic("Venus", 500, 72);
    myGalaxy.galactic("Mercury", 500, 72);
    myGalaxy.galactic("Jupiter", 500, 72);
    myGalaxy.galactic("Mars", 500, 72);
    expect(myGalaxy.galactic("Pluto", 200, 72)).toEqual("not in the Galaxy");
  });
});

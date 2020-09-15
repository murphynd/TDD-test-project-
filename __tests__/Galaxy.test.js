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
  test("create method for class Galaxy to add planets", () => {
    myGalaxy.addPlanet(Saturn);
    expect(myGalaxy.planets).toEqual([Mars, Mercury, Venus, Jupiter, Saturn]);
  });
  test("this will test if planet objects register in galexy array", () => {
    expect(myGalaxy.planets).toEqual([Mars, Mercury, Venus, Jupiter]);
    expect(myGalaxy.planets).toHaveLength(4);
  });
  test("create a method for class galexy to search planets objects", () => {
    myGalaxy.findPlanet("Venus");
    myGalaxy.findPlanet("Mercury");
    myGalaxy.findPlanet("Jupiter");
    myGalaxy.findPlanet("Mars");
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      earthYears: 0.62,
      humanYears: 0,
      planet: "Venus",
    });
    expect(myGalaxy.findPlanet("Mercury")).toEqual({
      earthYears: 0.24,
      humanYears: 0,
      planet: "Mercury",
    });
    expect(myGalaxy.findPlanet("Jupiter")).toEqual({
      earthYears: 11.8,
      humanYears: 0,
      planet: "Jupiter",
    });
    expect(myGalaxy.findPlanet("Mars")).toEqual({
      earthYears: 1.88,
      humanYears: 0,
      planet: "Mars",
    });
  });
  test("add inputted age to update all of the planets in Galaxy Array", () => {
    myGalaxy.addHumanAge("Venus", 30);
    myGalaxy.addHumanAge("Mercury", 30);
    myGalaxy.addHumanAge("Jupiter", 30);
    myGalaxy.addHumanAge("Mars", 30);
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      earthYears: 0.62,
      humanYears: 18,
      planet: "Venus",
    });
    expect(myGalaxy.findPlanet("Mercury")).toEqual({
      earthYears: 0.24,
      humanYears: 7,
      planet: "Mercury",
    });
    expect(myGalaxy.findPlanet("Jupiter")).toEqual({
      earthYears: 11.8,
      humanYears: 354,
      planet: "Jupiter",
    });
    expect(myGalaxy.findPlanet("Mars")).toEqual({
      earthYears: 1.88,
      humanYears: 56,
      planet: "Mars",
    });
  });
  test("add inputted age to update all of the planets in Galaxy Array and tell when a planet is not in the galaxy", () => {
    myGalaxy.addHumanAge("pluto", 30);
    expect(myGalaxy.addHumanAge("pluto")).toEqual("not in the Galaxy");
  });
  test("This will take an input of life expentancy and tell the user if they would still be alive.", () => {
    myGalaxy.galactic("Venus", 5, 72);
    // myGalaxy.galactic("Mercury", 5, 72);
    // myGalaxy.galactic("Jupiter", 5, 72);
    // myGalaxy.galactic("Mars", 5, 72);

    expect(myGalaxy.galactic("Venus", 5, 72)).toEqual(
      "you are alive at the ripe age of 28"
    );
    // expect(myGalaxy.galactic("Mercury", 5, 72)).toEqual(
    //   "you are alive at the ripe age of 28"
    // );
    // expect(myGalaxy.galactic("Jupiter", 5, 72)).toEqual(
    //   "you are alive at the ripe age of 28"
    // );
    // expect(myGalaxy.galactic("Mars", 5, 72)).toEqual(
    //   "you are alive at the ripe age of 28"
    // );
  });
  // test("This will take an input of life expentancy and tell the user if they are dead.", () => {
  //   myGalaxy.galactic("Mars", 200, 72);
  //   expect(myGalaxy.galactic("Mars", 200, 72)).toEqual(
  //     "you should be dead at the ripe age of 304"
  //   );
  // });
  // test("This will take an input wrong planet and tell user it is not in the Galaxy", () => {
  //   myGalaxy.galactic("Pluto", 200, 72);
  //   expect(myGalaxy.galactic("Pluto", 200, 72)).toEqual("not in the Galaxy");
  // });
  // test("This will take an input of life expentancy and tell the user how many years past life expectancy they have lived", () => {
  //   myGalaxy.galactic("Mars", 200, 72);
  //   expect(myGalaxy.galactic("Mars", 200, 72)).toEqual(
  //     "you should be dead at the ripe age of 304"
  //   );
  // });
  // test("This will take an input of life expentancy and tell the user they are alive", () => {
  //   myGalaxy.galactic("Mars", 18, 72);
  //   expect(myGalaxy.galactic("Mars", 18, 72)).toEqual(
  //     "you are alive at the ripe age of 33"
  //   );
  // });
  // test("This will take an bad input and tell user 'not in the galexy'", () => {
  //   myGalaxy.galactic("Pluto", 200, 72);
  //   expect(myGalaxy.galactic("Pluto", 200, 72)).toEqual("not in the Galaxy");
  // });
  // test("This will take an input of life expentancy and tell the user how many years past life expectancy they have lived with a string", () => {
  //   myGalaxy.galactic("Mars", 200, 72);
  //   expect(myGalaxy.galactic("Mars", 200, 72)).toEqual(
  //     "you should be dead at the ripe age of 304"
  //   );
  // });
  // test("This will take an input of life expentancy and tell the user they are alive", () => {
  //   myGalaxy.galactic("Mars", 18, 72);
  //   expect(myGalaxy.galactic("Mars", 18, 72)).toEqual(
  //     "you are alive at the ripe age of 33"
  //   );
  // });
  // test("This will take bad input and tell user they are not in the galexy", () => {
  //   myGalaxy.galactic("pluto", 18, 72);
  //   expect(myGalaxy.galactic("pluto", 18, 72)).toEqual("not in the Galaxy");
  // });
});

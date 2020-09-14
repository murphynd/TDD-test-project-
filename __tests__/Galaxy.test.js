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
});

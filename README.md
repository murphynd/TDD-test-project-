# _✨ Super Galactic Age Calculator ✨_

#### _Calculate your age in galactic time! Sept 4, 2020_

#### By _**Natalie Murphy**_

## Description

Super Galactic Age Calculator
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days.

This app determines a user's age based on a planet's solar years.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit a TDD spec before writing the corresponding method; in this way, you'll be following a Red, Green, Refactor workflow. Remember to include at least one test for each spec and that, typically, we'll only want one expectation per test.

The business logic of your application should:

Take a person's age in years and create a class that does the following:

- Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
- Returns their age in Venus years. (A Venus year is .62 Earth years.)
- Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
- Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)

- Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
  If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

## Specs

```
Spec: create a class callled PlaneTime that takes the input of differing planet
input: planet, Earth years equivilant
Output:this.planet = mars, this.earthYears = 1.88
```

```
Spec: "Create a method called Age in class planet that multiplys age by earthYears"
input: mars.age(30)
Output:1.88(mars time) * 30 (my age) = 56 (years on earth)
```

```
Spec:"create class Galaxy to hold array of multiple planets"
input: myGalaxy = new Galaxy
Output:myGalaxy[]
```

```
Spec:"create method for class Galaxy to add planets"
input:myGalaxy.addPlanet(planet)
Output:myGalaxy.planets = [planet,planet2,planet3]
```

```
Spec:"this will test if planet objects register in galexy array"
input:
myGalaxy.addPlanet(Mars);
 myGalaxy.addPlanet(Mercury);
  myGalaxy.addPlanet(Venus);
Output:myGalexy.planets= [Mars, Mercury, Venus]
```

```
Spec:"create a method for class of galaxy to search planets"
input:myGalexy.findplanet("venus")
Output:venus Planet object
```

```
Spec:"add inputted age to update all of the planets in Galaxy Array"
input: I am 30 years old
Output: Mars.humanYears = 56
Venus.humanYears = 18
Mercury.humanYears = 7
```

```
Spec:"create a life expentancy method in class Galaxy"
input:how old am I on Mars? would I be dead (if death was 72yrs old)
Output: I would be 56 and not dead.
```

## Setup/Installation Requirements

## Known Bugs

## Support and contact details

If you run into any issues or have questions, ideas or concerns contact Natalie Murphy at Nataliemurphy500@gmail.com or make a contribution to the code.

## Technologies Used

HTML CSS jQuery Javascript

### License

MIT

Copyright (c) 2020 Natalie Murphy

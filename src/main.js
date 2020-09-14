import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Planet from "../src/js/Planet";
import Galaxy from "../src/js/Galaxy";

myGalaxy = new Galaxy();
Mars = new Planet("Mars", 1.88);
Mercury = new Planet("Mercury", 0.24);
Venus = new Planet("Venus", 0.62);
Jupiter = new Planet("Jupiter", 11.86);
myGalaxy.addPlanet(Mars);
myGalaxy.addPlanet(Mercury);
myGalaxy.addPlanet(Venus);
myGalaxy.addPlanet(Jupiter);

$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    let Planet = $("#PlanetInput").val();
    let ageInput = $("#Age-input").val();
    let lifeInput = $("#life-input").val();
    myGalaxy.galactic(Planet, ageInput, lifeInput);
  });
});

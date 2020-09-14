import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Galaxy } from "../src/js/Galaxy";
import Planet from "../src/js/Planet";

myGalaxy = new Galaxy();

Mars = new Planet("Mars", 1.88);

myGalaxy.addPlanet(Mars);

$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    let PlanetInput = $("#PlanetInput").val();
    let ageInput = $("#Age-input").val();
    let lifeInput = $("#life-input").val();
    myGalaxy.Galactic(PlanetInput, ageInput, lifeInput);
  });
});

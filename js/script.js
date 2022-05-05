function changeMoon() {
  document.querySelector("#planet-name").innerHTML="MOON";
  document.querySelector("#planet-image").src="images/image-moon.png";
  document.querySelector("#planet-description").innerHTML="See our planet as you’ve never seen it before. A perfect relaxing trip away to helpregain perspective and come back refreshed. While you’re there, take in some historyby visiting the Luna 2 and Apollo 11 landing sites."
  document.querySelector("#planet-distance").innerHTML="384,400 KM";
  document.querySelector("#planet-travel").innerHTML="3 DAYS";
  document.querySelectorAll(".planet-button")[0].classList.add("button-active");
  document.querySelectorAll(".planet-button")[1].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[2].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[3].classList.remove("button-active");
}

function changeMars() {
  document.querySelector("#planet-name").innerHTML="MARS";
  document.querySelector("#planet-image").src="images/image-mars.png";
  document.querySelector("#planet-description").innerHTML="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. It’s two and a half timesthe size of Everest!"
  document.querySelector("#planet-distance").innerHTML="225 MIL. KM";
  document.querySelector("#planet-travel").innerHTML="9 MONTHS";
  document.querySelectorAll(".planet-button")[0].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[1].classList.add("button-active");
  document.querySelectorAll(".planet-button")[2].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[3].classList.remove("button-active");
}

function changeEuropa() {
  document.querySelector("#planet-name").innerHTML="EUROPA";
  document.querySelector("#planet-image").src="images/image-europa.png";
  document.querySelector("#planet-description").innerHTML="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
  document.querySelector("#planet-distance").innerHTML="628 MIL. KM";
  document.querySelector("#planet-travel").innerHTML="3 YEARS";
  document.querySelectorAll(".planet-button")[0].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[1].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[2].classList.add("button-active");
  document.querySelectorAll(".planet-button")[3].classList.remove("button-active");
}


function changeTitan() {
  document.querySelector("#planet-name").innerHTML="TITAN";
  document.querySelector("#planet-image").src="images/image-titan.png";
  document.querySelector("#planet-description").innerHTML="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
  document.querySelector("#planet-distance").innerHTML="1.6 BIL. KM";
  document.querySelector("#planet-travel").innerHTML="7 YEARS";
  document.querySelectorAll(".planet-button")[0].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[1].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[2].classList.remove("button-active");
  document.querySelectorAll(".planet-button")[3].classList.add("button-active");
}

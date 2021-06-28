/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  createCard();
  console.log("Hello Rigo from the console!");
};

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let suits = ["♦", "♥", "♠", "♣"];

let lastNumber = numbers.length - 1;
let lastSuit = suits.length - 1;

let randomNumber = numbers[Math.floor(Math.random() * lastNumber)];
let randomSuits = suits[Math.floor(Math.random() * lastSuit)];
let colorSuits;

if (randomSuits === "♦" || randomSuits === "♥") {
  colorSuits = "red";
}

function createCard() {
  document.querySelector("#numbers").innerHTML = randomNumber;
  document.getElementById("numbers").style.fontSize = "200px";

  document.querySelector("#topSuit").innerHTML = randomSuits;
  document.getElementById("topSuit").style.fontSize = "100px";
  document.getElementById("topSuit").style.color = colorSuits;

  document.querySelector("#bottomSuit").innerHTML = randomSuits;
  document.getElementById("bottomSuit").style.fontSize = "100px";
  document.getElementById("bottomSuit").style.color = colorSuits;
}

let btn = document.createElement("button");
btn.innerHTML = "New Card";
btn.addEventListener("click", function() {
  window.location.reload();
});
document.body.appendChild(btn);

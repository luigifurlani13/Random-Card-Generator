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

function createCard() {
  document.querySelector("#numbers").innerHTML = randomNumber;
  document.getElementById("numbers").style.fontSize = "300px";

  document.querySelector("#topSuit").innerHTML = randomSuits;
  document.querySelector("#bottomSuit").innerHTML = randomSuits;
  console.log(randomNumber);
  console.log(randomSuits);
}

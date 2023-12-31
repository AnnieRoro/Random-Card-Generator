/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { end } from "@popperjs/core";

function Card() {
  let palos = [ "♦", "♥" ,"♠" ,"♣"];
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  let indexPalos = Math.floor(Math.random() * palos.length);
  let indexNum = Math.floor(Math.random() * num.length);

  let top = document.querySelector('#top');
  let number = document.querySelector('#number');
  let bottom = document.querySelector('#bottom');

  top.innerHTML = palos[indexPalos];
  bottom.innerHTML = palos[indexPalos];
  number.innerHTML = num[indexNum];

  let currentClass= palos[indexPalos] == "♦" || palos[indexPalos] == "♥" ? "text-danger" : "text-dark";
  top.className = currentClass;
  bottom.className = currentClass;
  number.className = currentClass

  console.log(palos[indexPalos], num [indexNum])
}

window.onload = function() {
  //write your code here
  Card();
};

let button = document.querySelector('#button')
button.addEventListener('click', () => Card());
"use strict"

// Hamburgermeny
// Hämta elementen från DOM
const hamburgerBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", function(){
	menu.classList.toggle("open")});

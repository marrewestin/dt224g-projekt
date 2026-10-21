"use strict"

// Hamburgermeny
const hamburgerBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", function(){
	menu.classList.toggle("open")});


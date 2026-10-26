"use strict"

// Hamburgermeny
const hamburgerBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", function(){
	menu.classList.toggle("open")});

// Kontaktformulär
// Hämta elementen från DOM
const contactForm = document.querySelector("#contact-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageInput = document.querySelector("#message")

const sent = document.querySelector("#sent");
const errorList = document.querySelector("#error-list");

// Array som används för felmeddelanden
let errors = [];

// Validera formulärets inmatning
function validateForm() {
    errors = []; // Rensa tidigare felmeddelanden

    // Kontrollera formulärets obligatoriska fält
    if (nameInput.value.trim() === "") { // Tar bort blanksteg och kontrollerar om namn är tomt
        errors.push("Fyll i ditt namn"); // Felmeddelande om fältet är tomt
    }

    if (emailInput.value.trim() === "") { // Tar bort blanksteg och kontrollerar om e-postadress är tomt
        errors.push("Fyll i din e-postadress"); // Felmeddelande om fältet är tomt
    }

    if (phoneInput.value.trim() === "") { // Tar bort blanksteg och kontrollerar om telefonnummer är tomt
        errors.push("Fyll i ditt telefonnummer"); // Felmeddelande om fältet är tomt
    };

	if (messageInput.value.trim() === "") { // Tar bort blanksteg och kontrollerar om meddelande är tomt
        errors.push("Skriv ett meddelande"); // Felmeddelande om fältet är tomt
    };

    // Visa eventuella felmeddelanden
    displayErrors();

    // Returnera resultatet (true eller false) av valideringen
    if (errors.length === 0) { // Kontrollerar om det finns något i errors-arrayen
        return true; // Om errors-arrayen är tom validerar formuläret korrekt
    } else {
        return false; // Om errors-arrayen innehåller felmeddelanden validerar formuläret inte korrekt
    }
}

// Visar felmeddelanden
function displayErrors() {
    // Rensa tidigare felmeddelanden
    errorList.innerHTML = "";
    // Skriv ut aktuella felmeddelanden till DOM
    errors.forEach((error) => {
        const li = document.createElement("li");
        li.textContent = error;
        errorList.appendChild(li);
    });
}

// Visar att meddelandet skickats
function displaySent() {
	sent.innerHTML = "<p>Tack för ditt meddelande!</p>";
	// rensa input-fält
	nameInput.value="";
	emailInput.value="";
	phoneInput.value="";
	messageInput.value="";
}

// Eventlyssnare
contactForm.addEventListener("submit", (event) => {
    // När formuläret skickas:
    event.preventDefault();
    // - validera inmatningen
    if (validateForm()) {
        console.log("Valideringen lyckades!")
		// contactForm.submit(); // Skickar formuläret
		displaySent();
    } else {
		console.log("Valideringen misslyckades!")
	}
});

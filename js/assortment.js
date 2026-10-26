"use strict"

// Visa sortiment
// Hämta elementen från DOM
const breadEl = document.querySelector("#bread");
const sweetEl = document.querySelector("#sweet");
const breadArt = document.querySelector(".bread-articles");

/* breadEl.addEventListener("click", function(){
	breadArt.classList.toggle("open")}); */

// Funktion för att hämta data från json-fil
async function fetchArticles() {
    try {
        const response = await fetch(`json/bread.json`); // Anropar json-filen
        if (!response.ok) {
            throw new Error("Något gick fel med anropet."); // Kastar ett fel om anropet misslyckas
        }
        const data = await response.json(); // Konverterar svaret till JSON
        //checkRecipes(data); // Anropar funktionen för att kontrollera om det finns recept att visa
        console.log(data);
        writeArticles(data)
    } catch (error) {
        console.error("Fel vid hämtning av data:", error); // Loggar eventuella fel som uppstår vid hämtning av data
        messageContainer.textContent = error.message; // Visar felmeddelandet i meddelandefältet
    }
}

function writeArticles(data) {
    console.log(data);
   breadArt.innerHTML = `
        <img src="/images/${data.image}" alt="${data.name}">
        <p>${data.name}</p>`
}

breadEl.addEventListener("click", function(){
	fetchArticles()});
"use strict"

// Visa sortiment
// Hämta elementen från DOM
const breadEl = document.querySelector("#bread");
const sweetEl = document.querySelector("#sweet");
const sweet2El = document.querySelector("#sweet2");
const breadArt = document.querySelector(".bread-articles");
const articlesEl = document.querySelector("#articles");
const articles2El = document.querySelector("#articles2");

/* BRÖD */
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

/* FIKABRÖD */
// Funktion för att hämta data från json-fil
async function fetchSweetArticles() {
    try {
        const response = await fetch(`json/sweet.json`); // Anropar json-filen
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

/* FIKABRÖD */
// Funktion för att hämta data från json-fil
async function fetchSweetArticles2() {
    try {
        const response = await fetch(`json/sweet.json`); // Anropar json-filen
        if (!response.ok) {
            throw new Error("Något gick fel med anropet."); // Kastar ett fel om anropet misslyckas
        }
        const data = await response.json(); // Konverterar svaret till JSON
        //checkRecipes(data); // Anropar funktionen för att kontrollera om det finns recept att visa
        console.log(data);
        writeArticles2(data)
    } catch (error) {
        console.error("Fel vid hämtning av data:", error); // Loggar eventuella fel som uppstår vid hämtning av data
        messageContainer.textContent = error.message; // Visar felmeddelandet i meddelandefältet
    }
}

function writeArticles(data) {
    articlesEl.innerHTML=""; // Töm artiklar från tidigare klick
    articles2El.innerHTML=""; // Töm artiklar från tidigare klick
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        articlesEl.innerHTML += `
        <article class="bread-articles">
        <img src="/images/${data[i].image}" alt="${data[i].name}">
        <p>${data[i].name}</p>
        </article>`
    }
}

function writeArticles2(data) {
    articlesEl.innerHTML=""; // Töm artiklar från tidigare klick
    articles2El.innerHTML=""; // Töm artiklar från tidigare klick
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        articles2El.innerHTML += `
        <article class="bread-articles">
        <img src="/images/${data[i].image}" alt="${data[i].name}">
        <p>${data[i].name}</p>
        </article>`
    }
}

breadEl.addEventListener("click", function () {
    fetchArticles()
    console.log("klickat bröd");
});


sweetEl.addEventListener("click", function () {
    fetchSweetArticles()
    console.log("klickat fikabröd");
});

sweet2El.addEventListener("click", function () {
    fetchSweetArticles2()
    console.log("klickat fikabröd");
});

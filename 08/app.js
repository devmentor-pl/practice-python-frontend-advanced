// pobranie formularza 
const formEl = document.querySelector("form");

// lista na błędy w formularzu
let errorsList = []; 

// Nasluchiwanie na wyslanie formularza
formEl.addEventListener("submit", function(e) {

errorsList = []; // wyczyszczenie listy bledów przed kolejnym sprawdzeniem

// sprawdzenie pola firstName
const firstName = formEl.querySelector("[name=firstName]")
if (firstName.value === "" || !isNaN(firstName.value)) {
    errorsList.push("Błąd w polu z imieniem");
    firstName.style.border = "solid red 2px";
    }
    else{
        firstName.style.border = "solid green 1px";
    }

// sprawdzenie pola lastName
const lastName = formEl.querySelector("[name=lastName]")
if (lastName.value === "" || !isNaN(lastName.value)) {
    errorsList.push("Błąd w polu z nazwiskiem");
    lastName.style.border = "solid red 2px";
    }
    else{
        lastName.style.border = "solid green 1px";
    }

// sprawdzenie pola street
const street = formEl.querySelector("[name=street]")
if (street.value === "" || !isNaN(street.value)) {
    errorsList.push("Błąd w polu ulicy");
    street.style.border = "solid red 2px";
    }
    else{
        street.style.border = "solid green 1px";
    }

// sprawdzenie pola houseNumber
const houseNumber = formEl.querySelector("[name=houseNumber]")
if (houseNumber.value < 1 || isNaN(houseNumber.value) ) {
    errorsList.push("Nieprawidłowa wartośc numeru budynku");
    houseNumber.style.border = "solid red 2px";
    }
    else{
        houseNumber.style.border = "solid green 1px";
    }

// sprawdzenie pola flatNumber
const flatNumber = formEl.querySelector("[name=flatNumber]")
if (flatNumber.value < 0 || flatNumber.value === "" ) {
    errorsList.push("Nieprawidłowa wartośc numeru mieszkania, jeżeli mieszkanie nie posiada numeru proszę wpisać 0");
    flatNumber.style.border = "solid red 2px";
    }
    else{
        flatNumber.style.border = "solid green 1px";
    }

// sprawdzenie pola zip
const zip = formEl.querySelector("[name=zip]")
if (zip.value === "") {
    errorsList.push("Błąd w polu kodu pocztowego");
    zip.style.border = "solid red 2px";
    }
    else{
        zip.style.border = "solid green 1px";
    }

// sprawdzenie pola city
const city = formEl.querySelector("[name=city]")
if (city.value === "" || !isNaN(city.value)) {
    errorsList.push("Błąd w polu miejscowości");
    city.style.border = "solid red 2px";
    }
    else{
        city.style.border = "solid green 1px";
    }

// sprawdzenie pola voivodeship
const voivodeship = formEl.querySelector("[name=voivodeship]")
if (voivodeship.value === "") {
    errorsList.push("Błąd w polu województwa");
    voivodeship.style.border = "solid red 2px";
    }
    else{
        voivodeship.style.border = "solid green 1px";
    }


// warunek na zatrzymanie wyslania gdy wystepuja bledy    
if (errorsList.length > 0) {
        e.preventDefault();
        console.log(errorsList);

    // wyczyszczenie listy błędów przed nowym komunikatem
    const messages = document.querySelector(".messages");
    messages.innerHTML = "";

    // pętla na dodadnie błędów na stronie
    errorsList.forEach( error => {
    const li = document.createElement("li")
    li.textContent = error
    messages.appendChild(li);
    });
}
});




/* 
} 
firstNameElement.addEventListener("change",checkInput(firstNameElement));
for(const el of formEl.elements) {
    el && el.addEventListener("keyup", function(e){
        console.log(el, e.target.value)
    });


    console.log(errorsList);
});
*/
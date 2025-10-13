
// funkcja losowania w zakresie
function randomNumber(min, max,) {
    return Math.round((Math.random() * (max - min)) + min);
}

//funkcja wypełenienia tabeli 20 elementami w podanym zakresie
function makeRandomTable(table) {
    for(let i = 0; i < 20; i++){
        table.push(randomNumber(minRandom,maxRandom));
    }
    return table
}

// pobranie danych od uzytkownika
const minRandom = prompt("Podaj minimalny zakres");
const maxRandom = prompt("Podaj maksymalny zakres");

// tworzenie elementu, nadanie mu klasy
let tableFirstTask = document.createElement("p");
tableFirstTask.classList.add("random-numbers");

// wyszukanie odpowiedniego elementu
const tableElements = document.querySelector("#task-1");

// sprawdzenie poprawność wybranego elementu i wykonanie funkcji
let randomElementsTable = [];
if( tableElements !== null) {
    tableFirstTask.textContent = makeRandomTable(randomElementsTable);
}
else {
    console.log("Bląd selektora");
}

// dodanie elementu 
tableElements.appendChild(tableFirstTask);


//  ---2---

// funkcja do sortowania i zwrócenia 10 największych liczb w tablicy
function biggestNumbers (table){
    table.sort((a, b) => b - a);    // sortowanie malejace
    return table.slice(0,10);   // wyswietlenie tylko pierwszych 10 elemntow
}

// tworzenie elementu, nadanie mu klasy
let tableSecondTask = document.createElement("p");
tableSecondTask.classList.add("10-biggest");

// wyszukanie odpowiedniego elementu
const secondTaskNumbers = document.querySelector("#task-2");

// sprawdzenie poprawność wybranego elementu i wykonanie funkcji
if (secondTaskNumbers !== null){
    tableSecondTask.textContent = biggestNumbers(randomElementsTable);
}
else {
    console.log("Bląd selektora");
}

// dodanie elementu 
secondTaskNumbers.appendChild(tableSecondTask);


// ---3---

//funkcja do liczenia średniej artmetycznej z elemntów tablicy
function getAvg(table){
    let sum = 0;
    table.forEach(function(num) {
        sum += num;
    })
    return sum / table.length ;
}

// tworzenie elementu, nadanie mu klasy
let numberThirdTask = document.createElement("p");
numberThirdTask.classList.add("average")

// wyszukanie odpowiedniego elementu
const thirdTaskNumber = document.querySelector("#task-3");

// sprawdzenie poprawność wybranego elementu i wykonanie funkcji
if (thirdTaskNumber !== null){
    numberThirdTask.textContent = getAvg(biggestNumbers(randomElementsTable));
}
else{
    console.log("Błąd selektora");
}

// dodanie elementu 
thirdTaskNumber.appendChild(numberThirdTask);


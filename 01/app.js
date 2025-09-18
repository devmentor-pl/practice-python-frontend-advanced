
/* rozwiązanie z pętlą for */
const x = prompt("Podaj liczbę");

for (let i=1; i<11; i++) {
    let resault = x*i
    console.log(`${x} x ${i} = ${resault}`);
}



/* rozwiązanie z pętlą while  */


//pobranie danych od użytkownika
const a = prompt("Podaj liczbę");
const n = prompt("Podaj liczbę");

//przypisanie zmiennych
let text = `${a}`
let counter = 0;
let resaultPower = 1;

//wykonanie pętli - obliczenie potęgi i dopisanie mnożników
while (counter < n) {
    resaultPower *= a
    
    if (counter + 1 < n) {
        text = text + ` * ${a}`;
    }
    counter++;
}

//wypisanie wyniku w konsoli
console.log(`${text} = ${resaultPower}`)

const multiplyTable = document.createElement('section')
multiplyTable.classList.add('multiply')

/* rozwiązanie z pętlą for */
const x = prompt("Podaj liczbę do Tabliczki mnożenia");
const articleElement = document.querySelector('div');

if (articleElement !== null){
for (let i=1; i<11; i++) {
    let resault = x*i;
    const p = document.createElement('p');
    p.textContent = (`${x} x ${i} = ${resault} `);
    multiplyTable.appendChild(p);
}
    articleElement.appendChild(multiplyTable) ;
}
else console.log("Błąd selektora")


/* rozwiązanie z pętlą while  */


//pobranie danych od użytkownika
const a = prompt("Podaj podstawę potęgi ");
const n = prompt("Podaj wykładnik potęgi");

//przypisanie zmiennych
let text = `${a}`
let counter = 0;
let resaultPower = 1;

let powerTable = document.createElement('section')
powerTable.classList.add('power')

const divElement = document.querySelector('#power');

//wykonanie pętli - obliczenie potęgi i dopisanie mnożników
if (divElement !== null){
while (counter < n) {
    resaultPower *= a
    
    if (counter + 1 < n) {
        text = text + ` * ${a}`;
    }
    counter++;
}
}
else console.log("Błąd selektora")

//wypisanie wyniku na stronie

powerTable.textContent = (`${text} = ${resaultPower}`);
divElement.appendChild(powerTable);
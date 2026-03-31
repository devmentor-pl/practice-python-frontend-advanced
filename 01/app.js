
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę: ');

console.log('For loop');
for(let i=1; i<11; i++){
    console.log(x, " x ", i, " = ", x * i);
}

/* rozwiązanie z pętlą while  */
console.log('While loop');
let i = 0;
while (i < 11){
    console.log(x, " x ", i, " = ", x * i);
    i++;
}
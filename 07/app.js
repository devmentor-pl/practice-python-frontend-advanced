const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

// tworzenie elementu, nadanie mu klasy
let newButtonElement = document.createElement("button");

// pętla na przypisanie atrybutów do nowego elementu
for(let key in buttonSettings.attr) {
    newButtonElement[key] = buttonSettings.attr[key];
    console.log(`Dodano atrybut: ${key}`);
}

 // pętla na przypisanie stylu do nowego elementu
for(let key in buttonSettings.css) {
    newButtonElement.style[key] = buttonSettings.css[key];
    console.log(`Dodano styl: ${key}`);

}

//dodanie tekstu do naszego przycisku
newButtonElement.textContent  = buttonSettings.text;


// wyszukanie odpowiedniego elementu DOM
const buttonSection = document.querySelector(".parent-for-button");

// sprawdzenie poprawność wybranego elementu i dodanie go na stronę
if( buttonSection !== null) {
    buttonSection.appendChild(newButtonElement);;
}
else {
    console.log("Bląd selektora");
}

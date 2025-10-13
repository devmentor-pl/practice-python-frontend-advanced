console.log('DOM');


// wyszukanie elemntu klasy comments
const commentsElemnt = document.querySelector(".comments");

// wyszukanie elementow dla odpowiednich klas
const commentsItemNewestElement = commentsElemnt.querySelector(".comments__item.comments__item--newest");

// wyszukanie elemntow po odpowiednim atrybucie
const dataInfoCommentsItemNewstElementList = commentsItemNewestElement.querySelectorAll("[data-info]");

// wypisanie dlugosci listy, czyli ilosc wystapien atrybutu "data-info"
console.log(`Znaleziona ilość elementów o atrybucie data-info: ${dataInfoCommentsItemNewstElementList.length}`);


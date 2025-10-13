// wyszukanie elementu button
const buttonElement = document.querySelector("button")

// stworzenie funkcji na komunikat w konsoli
function clickFunc(){
    console.log("clicked");
}

// nasłuchiwanie na zdarzenie w wyszukanym elemencie i wykonanie funkcji
buttonElement.addEventListener("click",clickFunc);

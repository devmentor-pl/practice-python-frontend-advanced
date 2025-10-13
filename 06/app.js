// wyszukanie listy elementów button
const buttonElementList = document.querySelectorAll("button")


buttonElementList.forEach(function(button){     //wykonanie pętli na liscie przyciskow
    button.addEventListener("click",function(event){    //nasluchiwanie wydarzenie na pojedynczym przysiku   
        if( event.target.textContent !== "clicked") {  //sprawdzenie czy przycisk byl juz uzyty
            console.log("clicked");     // komunikat w konsoli
            event.target.textContent = "clicked";   //zmiana tekstu na odpowiednim elemencie
        }
    });
});

// stworzenie listy z atrybutami data-url
const linksList = document.querySelectorAll("[data-url]");

//przypisanie zawartosc data-url do zmiennej

linksdata = [];

linksList.forEach(function(List){
    let link = List.getAttribute("data-url");
    linksdata.push(link);
});

// przypisanie linku do atrybutu href

for (let i=0; i < linksList.length; i++ ){
    linksList[i].setAttribute("href",linksdata[i]);
}
// próbowałem przypisywanie zrobić przez forEach, ale jakoś nie mogłem tego wykminić :)
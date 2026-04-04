console.log('DOM');

const links = document.querySelectorAll('[data-url]');

links.forEach((link) => {
    const url = link.dataset.url;
    if(url){
        link.setAttribute('href', url);
    }
});


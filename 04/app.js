console.log('DOM');

const links = document.querySelectorAll('[data-url]');

if(links){
    links.forEach((link) => {
        const url = link.dataset.url;
        if(url){
            link.setAttribute('href', url);
    }
    });
}


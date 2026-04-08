console.log('DOM');

btnEl = document.querySelectorAll('button');

const clickHandle = function (event){
    this.textContent = 'clicked';
    console.log('clicked');

    this.removeEventListener('click', clickHandle);
}

if(btnEl) {
    btnEl.forEach(item => {
        item.addEventListener('click', clickHandle);
    });
}


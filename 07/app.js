console.log('DOM');

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

const section = document.querySelector('.parent-for-button');

if (section){
    btnEl = createButton(buttonSettings);
    
    section.appendChild(btnEl);
}


function createButton(buttonSettings){
    btnEl = document.createElement('button');

    for (const key in buttonSettings.attr){
        btnEl[key] = buttonSettings.attr[key];
    }

    for (const key in buttonSettings.css){
        btnEl.style[key] = buttonSettings.css[key];
    }
    btnEl.textContent = buttonSettings.text;
    
    return btnEl;
}
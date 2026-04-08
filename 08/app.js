console.log('DOM');

const form = document.querySelector('form');
const messages = document.querySelector('.messages');

form.addEventListener('submit', checkData);

function checkData(e) {
    const errors = [];
     e.preventDefault();
     messages.innerHTML = '';

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;

    if (!firstName) errors.push("Imię jest wymagane");
    if (!lastName) errors.push("Nazwisko jest wymagane");
    if (!street) errors.push("Ulica jest wymagana");
    if (!houseNumber) errors.push("Numer budynku jest wymagany");
    if (!zip) errors.push("Kod pocztowy jest wymagany");
    if (!city) errors.push("Miejscowość jest wymagana");
    if (!voivodeship) errors.push("Województwo jest wymagane");

    if (houseNumber <= 0){
        errors.push('Numer domu musi być większy od 0!');   
    }

    if (flatNumber <= 0) {
        errors.push("Numer mieszkania musi być większy od 0");
    }
    
    const zipRegex = /^[0-9]{2}-[0-9]{3}$/;
    if (zip && !zipRegex.test(zip)) {
        errors.push("Kod pocztowy musi mieć format XX-XXX");
    }

    if (errors.length > 0){
        errors.forEach(error => {
            const liEl = document.createElement('li');
            liEl.textContent = error;
            messages.appendChild(liEl);
        })
    } else {
        const liEl = document.createElement('li');
        liEl.textContent = "Dane zostały wysłane prawidłowo!";
        messages.appendChild(liEl);
    }
}

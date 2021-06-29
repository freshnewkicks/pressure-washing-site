// navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});

// calculator
const quoter = document.querySelector('.quoter');
const total = document.querySelector('.total');
const input = document.querySelector('.number');

let contactInfo = document.createElement('div');
let quoteDisclaimer = document.createElement('sub');

// function calls
input.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
        calculateQuote();
    }
});

function calculateQuote() {
    let pricePerSqFt = 0.14;
    let totalCost = Math.floor(input.value * pricePerSqFt);

    if (totalCost >= 999) {
        total.innerHTML = '$ ' + totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (totalCost < 999) {
        total.innerHTML = '$ ' + totalCost;
    }
    quoter.appendChild(contactInfo);
    quoter.appendChild(quoteDisclaimer);
    contactInfo.innerHTML = 'Schedule an appointment or request more information at 304-555-5555';
    quoteDisclaimer.innerHTML = 'All estimates are subject to in person assessments and are not necessarily reflective of the final price';
    contactInfo.style.display = 'flex';
    contactInfo.style.textAlign = 'center';
    quoteDisclaimer.style.fontSize = '14px';
    quoteDisclaimer.style.textAlign = 'center';
    quoteDisclaimer.style.paddingTop = '5%';

    if (totalCost == 0) {
        contactInfo.remove();
    }
}
const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.color = 'orange';
header.style.borderBottom = '3px solid orange';

const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

const basketHeading = document.getElementById('basket-heading');
basketHeading.style.fontStyle = 'italic';
basketHeading.style.color = 'green';

const thanks = document.getElementById('thanks');
const paragraph = document.createElement('p');
paragraph.textContent = 'Please visit us again';
thanks.appendChild(paragraph);
thanks.style.fontWeight = 'bold';

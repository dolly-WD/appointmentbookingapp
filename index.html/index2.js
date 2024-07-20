document.addEventListener('DOMContentLoaded', function() {
    // 1. Select the basket heading by ID and set its color to brown
    const basketHeading = document.querySelector('#basket-heading');
    if (basketHeading) {
      basketHeading.style.color = 'brown';
    }
  
    // 2. Change background and text color of even fruit items
    const fruitItems = document.querySelectorAll('.fruit');
    fruitItems.forEach((item, index) => {
      if (index % 2 === 1) { // Check if index is odd (even in 1-based counting)
        item.style.backgroundColor = 'brown';
        item.style.color = 'white';
      }
    });
  });
  
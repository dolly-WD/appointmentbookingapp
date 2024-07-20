const fruits = document.querySelectorAll('.fruits .fruit');
      
      // Apply bold font to all list items
      fruits.forEach(fruit => {
        fruit.style.fontWeight = 'bold';
      });

      // Apply yellow background to the 3rd list item
      if (fruits[2]) {
        fruits[2].style.backgroundColor = 'yellow';
      }

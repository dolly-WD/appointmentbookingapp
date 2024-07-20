document.addEventListener("DOMContentLoaded", function() {
    // Get the unordered list of fruits
    const fruitsList = document.querySelectorAll(".fruits .fruit");
    
    // Get the paragraph element that shows the total number of fruits
    const fruitsTotal = document.getElementById("fruits-total");
    
    // Update the text content of the paragraph with the total number of fruits
    fruitsTotal.textContent = `Total fruits: ${fruitsList.length}`;
  });
  
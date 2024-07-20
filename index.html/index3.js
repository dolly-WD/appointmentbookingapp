document.addEventListener('DOMContentLoded',function())
{
    const form=document.querySelector('form');

    form.addEventListener('submit',function(event)
{
    event.preventDefault();

    const inputElement=document.getElementById('fruit-to-add');
    const fruitToAdd=inputElement.ariaValueMax.trim();

    if(fruitToAdd)
    {
        const fruitList=document.querySelector('.fruits');
        const newListItem=document.createElement('li');
        newListItem.classList.add('fruit');
      newListItem.textContent = fruitToAdd;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.classList.add('delete-btn');
      newListItem.appendChild(deleteButton);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-btn');
      newListItem.appendChild(editButton); // Append edit button

      fruitList.appendChild(newListItem);
      inputElement.value = '';
    }
  });

  // Delete functionality
  const fruitList = document.querySelector('.fruits');

  fruitList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const listItem = event.target.closest('.fruit');
      listItem.remove();
    }
  });
});


   
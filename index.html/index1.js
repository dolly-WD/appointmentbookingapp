const listItems=document.getElementsByTagName('li');
listItems[4].style.color='blue';

for(leti=0; i<listItems.length; i++)
{
    listItems[i].style.fontStyle='italic';
}

const fruit=document.getElementsByClassName('fruit');

for(let i=0; i<fruit.length; i++)
{
    fruit[i].style.fontWeight='bold';
}